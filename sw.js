const CACHE_NAME = "englishstudy-v15-20260812";
const AUDIO_SLUGS = [
  "a-cat",
  "a-flower",
  "all-aboard",
  "are-you-ready",
  "ball",
  "blue",
  "bye-bye",
  "can-i-have-the-ball-please",
  "car",
  "cat",
  "choo-choo",
  "do-you-like-cats",
  "do-you-like-red",
  "dog",
  "family",
  "fast",
  "flower",
  "good-morning",
  "good-morning-grandma",
  "good-morning-how-are-you",
  "grandma",
  "hat",
  "hello",
  "here-comes-the-train",
  "here-you-are",
  "how-are-you",
  "i-love-you",
  "i-love-you-too",
  "im-happy",
  "im-ready",
  "it-is-a-cat",
  "it-is-red",
  "lets-go-to-the-park",
  "lets-go-to-the-park-look-at-the-flower",
  "lets-play",
  "lets-play-together",
  "look-at-the-flower",
  "okay",
  "put-on-your-hat",
  "put-on-your-hat-are-you-ready",
  "red",
  "shoes",
  "thank-you",
  "this-is-my-family",
  "this-is-my-family-i-love-you",
  "tree",
  "what-animal-is-it",
  "what-animal-is-it-it-is-a-cat",
  "what-color-is-it",
  "what-color-is-it-it-is-red",
  "yellow",
  "yes-i-do",
  "a-star",
  "all-done",
  "bed",
  "book",
  "can-you-find-a-circle",
  "can-you-find-it",
  "circle",
  "clap-clap",
  "clap-your-hands",
  "clap-your-hands-stamp-your-feet",
  "feet",
  "hands",
  "happy",
  "here-it-is",
  "how-do-you-feel",
  "how-do-you-feel-i-feel-happy",
  "how-is-the-weather",
  "how-is-the-weather-it-is-sunny",
  "i-feel-happy",
  "it-is-a-circle",
  "it-is-on-the-table",
  "it-is-sunny",
  "lets-clean-up",
  "lets-clean-up-put-it-here",
  "lets-go-outside",
  "lets-go",
  "me-too",
  "on-the-table",
  "please",
  "please-help-me",
  "please-help-me-thank-you",
  "put-it-here",
  "rainy",
  "ready",
  "slow",
  "sorry",
  "stamp-stamp",
  "stamp-your-feet",
  "star",
  "sunny",
  "table",
  "the-train-is-fast",
  "the-train-is-slow",
  "tired",
  "toy",
  "train",
  "what-shape-is-it",
  "what-shape-is-it-it-is-a-circle",
  "stop-at-the-station",
  "we-are-here",
  "where-is-the-book",
  "where-is-the-book-it-is-on-the-table",
  "youre-welcome"
];
const AUDIO_FILES = AUDIO_SLUGS.flatMap(slug => [
  `./audio/${slug}-normal.mp3`,
  `./audio/${slug}-slow.mp3`
]);
const APP_SHELL = [
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/app-icon-v2-180.png",
  "./icons/app-icon-v2-192.png",
  "./icons/app-icon-v2-512.png",
  ...AUDIO_FILES
];

async function broadcastCacheStatus(status, completed, total) {
  const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  windows.forEach(client => client.postMessage({
    type: "CACHE_STATUS",
    status,
    completed,
    total
  }));
}

async function cacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  const total = APP_SHELL.length;
  let completed = 0;
  let cursor = 0;

  await broadcastCacheStatus("loading", completed, total);

  const cacheNext = async () => {
    while (cursor < total) {
      const path = APP_SHELL[cursor];
      cursor += 1;
      const request = new Request(path, { cache: "reload" });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`Unable to cache ${path}`);
      await cache.put(request, response);
      completed += 1;
      await broadcastCacheStatus("loading", completed, total);
    }
  };

  await Promise.all(Array.from({ length: 6 }, cacheNext));
  await broadcastCacheStatus("ready", total, total);
}

self.addEventListener("install", event => {
  event.waitUntil(
    cacheAppShell()
      .then(() => self.skipWaiting())
      .catch(async error => {
        await broadcastCacheStatus("error", 0, APP_SHELL.length);
        throw error;
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"))
        .then(response => response || Promise.reject(new Error("No offline page")))
        .catch(() => new Response(
          "<!doctype html><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\"><title>一起说英语</title><body style=\"margin:0;background:#f7f4ec;color:#25312d;font:18px -apple-system,BlinkMacSystemFont,sans-serif;display:grid;min-height:100vh;place-items:center;text-align:center\"><div><strong>离线内容还没准备好</strong><br><br>请联网打开一次应用。</div></body>",
          { headers: { "Content-Type": "text/html; charset=utf-8" } }
        ))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
