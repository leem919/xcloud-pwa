var staticCacheName = "pwa";
const update = 29;

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(["/xcloud-pwa", "/xcloud-pwa/offline.html", "/xcloud-pwa/icons/loading.gif", "/xcloud-pwa/icons/offlinebanner.png"]);
	})
);
});

self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
	return response || fetch(event.request);
	})
);
});
