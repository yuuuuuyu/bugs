const a = [1, 2, 3, 4, 5]

Object.keys(a).forEach(k => {
    Object.defineProperty(a, k, {
        get: function () {
            console.log(`key: ${k}`)
        },
        set: function (value) {
            console.log(`触发set: ${value}`)
        }
    })
})

a[3] = 44 // 触发
a[5] = 6  // 不触发