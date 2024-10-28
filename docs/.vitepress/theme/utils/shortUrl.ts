import sidebar from "../../config/sidebar"
import { MY_TAB } from "../../config/sidebar"
import md5 from "blueimp-md5"
import config from "../../config"

export interface IShortUrlMap {
  [key: string]: string
}

export function createShortUrlMap() {
  const allSideBar = sidebar

  const tabs = Object.keys(allSideBar) as MY_TAB[]
  const long2short: IShortUrlMap = {}
  const short2long: IShortUrlMap = {}
  function findItems(items: (typeof allSideBar)[MY_TAB]) {
    for (const item of items) {
      if (item["items"]) {
        findItems(item["items"])
      } else {
        const link = item.link
          ? config.base + item.link
          : item.url.replace(".html", "")

        if (!link) continue
        const shortUrl = md5(link).slice(0, 11)
        long2short[link] = shortUrl
        short2long[shortUrl] = `${link}.html`
      }
    }
  }
  tabs.forEach(tab => {
    findItems(allSideBar[tab])
  })
  console.log(long2short, short2long)

  return [long2short, short2long]
}

export const [long2short, short2long] = createShortUrlMap()

