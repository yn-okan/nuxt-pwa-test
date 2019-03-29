importScripts('./_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./_nuxt/9d87989428e254a30346.js",
    "revision": "ecf7ce60980a4f5d5a19c34c0056bfd4"
  },
  {
    "url": "./_nuxt/abb604d73853323cf87c.js",
    "revision": "f997cbc5a85a77ceca1a8647cb386a87"
  },
  {
    "url": "./_nuxt/b7d0eed743063948720a.js",
    "revision": "93bfb57ab799c4b843791eb23a305dac"
  },
  {
    "url": "./_nuxt/f972b847c17cafa70295.js",
    "revision": "3af25d950bd6acea817539dad1bc780d"
  }
], {
  "cacheId": "nuxt-pwa-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./.*'), workbox.strategies.networkFirst({}), 'GET')
