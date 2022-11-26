import browser from "webextension-polyfill"
import { fetchBackgroundImage } from "../lib/bgImage"

browser.runtime.onMessage.addListener(async (msg) => {
  console.log(msg)
  if (msg.type === "fetch-bg") {
    return fetchBackgroundImage()
  }
})
