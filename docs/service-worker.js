importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.clientsClaim();

workbox.routing.registerNavigationRoute("/multimonitor/index.html", {

  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
