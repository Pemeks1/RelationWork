self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("connection-workbook-v1").then(function(cache) {
      return cache.addAll([
        "introduction.html",
        "engagement-guidelines.html",
        "manifest.json",
        "icon.png"
        // Add more files as you build them
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
