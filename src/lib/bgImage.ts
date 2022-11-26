import dayjs from "dayjs"
import browser from "webextension-polyfill"
import { APP_NAME } from "./constants"

interface ImageFetchData {
  urls: {
    raw: string
  }
  links: {
    html: string
  }
  location: {
    name: string
  }
  user: {
    name: string
    links: {
      html: string
    }
  }
}

interface ImageCacheData {
  images: Image[]
  timestamp: Date
}

export interface Image {
  imageURL: string
  imageLink: string
  location: string
  user: {
    name: string
    profileLink: string
  }
}

const IMAGE_CACHE_KEY = "bg-data"

const fetchImageAPI = async (): Promise<ImageFetchData[]> => {
  let res = await fetch(
    "https://api.unsplash.com/photos/random?query=scenery&orientation=landscape&count=30",
    {
      headers: {
        authorization: `Client-ID ${import.meta.env.VITE_CLIENT_ID}`,
      },
    }
  )
  return res.json()
}

export const getBackgroundImage = async (): Promise<Image> => {
  let { [IMAGE_CACHE_KEY]: data } = await browser.storage.local.get(
    IMAGE_CACHE_KEY
  )
  if (data === undefined || dayjs().diff(dayjs(data.timestamp), "day") >= 30) {
    data = await browser.runtime.sendMessage({
      type: "fetch-bg",
    })
  }
  let idx = dayjs().diff(dayjs(data.timestamp), "day")
  return data.images[idx]
}

export const fetchBackgroundImage = async () => {
  let raw = await fetchImageAPI()
  let data: ImageCacheData = {
    images: raw.map((v) => ({
      imageURL: `${v.urls.raw}&q=80&h=1440&fm=webp`,
      imageLink: `${v.links.html}?utm_source=${APP_NAME}&utm_medium=referral`,
      location: v.location.name,
      user: {
        name: v.user.name,
        profileLink: `${v.user.links.html}?utm_source=${APP_NAME}&utm_medium=referral`,
      },
    })),
    timestamp: dayjs().toDate(),
  }
  await browser.storage.local.set({ [IMAGE_CACHE_KEY]: data })

  return data
}
