importScripts(
  "https://g.alicdn.com/mylib/lp-workbox-cdn/3.6.3-2/workbox/workbox-sw.js"
);

workbox.setConfig({
  debug: false
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.suppressWarnings(false);
workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /regSW\.pwa\.js/gi,
  workbox.strategies.networkOnly(),
  "GET"
);

workbox.routing.registerRoute(
  /https:\/\/unpkg\.com\/.+(css|js)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "saltUI-CDN",
    plugins: [
      {
        requestWillFetch: ({ request }) => {
          return new Request(request.url, {
            mode: "cors",
            credentials: "omit"
          });
        }
      }
    ]
  })
);

workbox.routing.registerRoute(
  /\.(js|css)$/,
  workbox.strategies.staleWhileRevalidate()
);
