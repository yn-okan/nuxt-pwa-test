importScripts('/nuxt-pwa-test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-pwa-test/_nuxt/0442ccfaa39804bb6cdb.js",
    "revision": "60329b6bc75e27627e393047c7bd6bf8"
  },
  {
    "url": "/nuxt-pwa-test/_nuxt/551f3a8757242162da9b.js",
    "revision": "27ff428eda3879d4e8635ed01e545d22"
  },
  {
    "url": "/nuxt-pwa-test/_nuxt/abb604d73853323cf87c.js",
    "revision": "f997cbc5a85a77ceca1a8647cb386a87"
  },
  {
    "url": "/nuxt-pwa-test/_nuxt/b7d0eed743063948720a.js",
    "revision": "93bfb57ab799c4b843791eb23a305dac"
  }
], {
  "cacheId": "nuxt-pwa-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt-pwa-test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-pwa-test/.*'), workbox.strategies.networkFirst({}), 'GET')
