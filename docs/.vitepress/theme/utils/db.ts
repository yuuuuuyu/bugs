export default class IndexedDBService {
  constructor(databaseName) {
    this.databaseName = databaseName
    this.db = null
  }

  async openDB(version, storeName, indexName) {
    const request = window.indexedDB.open(this.databaseName, version)

    request.onupgradeneeded = event => {
      const db = event.target.result
      if (!db.objectStoreNames.contains(storeName)) {
        const objectStore = db.createObjectStore(storeName, {
          keyPath: "id",
          autoIncrement: true,
        })
        objectStore.createIndex(indexName, indexName, { unique: false }) // 创建索引
      } else {
        const transaction = event.target.transaction
        const objectStore = transaction.objectStore(storeName)
        if (!objectStore.indexNames.contains(indexName)) {
          objectStore.createIndex(indexName, indexName, { unique: false })
        }
      }
    }

    await new Promise((resolve, reject) => {
      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }
    })
  }

  async addData(storeName, data) {
    const transaction = this.db.transaction(storeName, "readwrite")
    const store = transaction.objectStore(storeName)
    store.add(data)
  }

  async getAllData(storeName) {
    const transaction = this.db.transaction(storeName, "readonly")
    const store = transaction.objectStore(storeName)
    return await new Promise((resolve, reject) => {
      const data = []
      const cursorRequest = store.openCursor()
      cursorRequest.onsuccess = event => {
        const cursor = event.target.result
        if (cursor) {
          data.push(cursor.value)
          cursor.continue()
        } else {
          resolve(data)
        }
      }
      cursorRequest.onerror = () => reject(cursorRequest.error)
    })
  }

  async deleteDB() {
    const deleteRequest = window.indexedDB.deleteDatabase(this.databaseName)
    await new Promise((resolve, reject) => {
      deleteRequest.onerror = () => reject(deleteRequest.error)
      deleteRequest.onsuccess = () => resolve()
    })
  }

  async updateData(storeName, id, newData) {
    const transaction = this.db.transaction(storeName, "readwrite")
    const store = transaction.objectStore(storeName)
    return await new Promise((resolve, reject) => {
      const getRequest = store.get(id)
      getRequest.onsuccess = () => {
        const data = getRequest.result
        if (data) {
          // Merge newData properties into existing data object
          const updatedData = { ...data, ...newData }
          const updateRequest = store.put(updatedData)

          updateRequest.onsuccess = () => resolve(updatedData)
          updateRequest.onerror = () => reject(updateRequest.error)
        } else {
          reject(new Error("No record found with the specified ID."))
        }
      }
      getRequest.onerror = () => reject(getRequest.error)
    })
  }

  async queryByField(storeName, indexName, value) {
    const transaction = this.db.transaction(storeName, "readonly")
    const store = transaction.objectStore(storeName)
    const index = store.index(indexName)

    return await new Promise((resolve, reject) => {
      const request = index.getAll(value)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }
}

