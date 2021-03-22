'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "697c85e5ca4f410a3de3b202846fe8d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dcb21ec4eed9f31de110c0c5316c7dc2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9cef4513692d8178c0365b6db8aa0de",
".git/logs/refs/heads/master": "b9cef4513692d8178c0365b6db8aa0de",
".git/logs/refs/remotes/origin/master": "84b1d839561fb270613f47bda77b65d5",
".git/objects/18/f37a58faf5bdac5de201f23339304a536b0dd9": "b6e4d32165f6d1cd151946c0e630c689",
".git/objects/1b/aeb0e88b6e9dc75f7c56385de27d589f60ef4f": "787001a1858878e00d6bd2206e24ce8e",
".git/objects/1f/c08826561349cc79d10ecfca8757f9050244f9": "fe34fd18bfe31827f36c3d40bd8f1783",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/f3b3bc64d9bbcb8389b0bc1962c36d44821169": "d1753364b12546e0d35c5c1876c9cf36",
".git/objects/2e/ba0c683fee3766e0d01798af56b6bfcc1bdfbd": "182d91a8c7cad18f513f10c927c30bbb",
".git/objects/2f/695ec37c7758af1e917db59a673f8a55f055f5": "670c45c82c55646dc545bce6ed7731c9",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/31/0c43b4aad51ab2b8f786494d5417a1cd80c4fd": "91be3a78fa6ede69a44ca047e540be1a",
".git/objects/3b/dfa6e1e36d2489e2eab24c11f0e46d6cdc7933": "dc66d995a9d1aae43858113bb7a0e24c",
".git/objects/3e/279bc95f96c135ec725b6a26eb7497eb961015": "a705102f00d2f937b70def57bf63982f",
".git/objects/46/823d60008e3b3b4798d1a05f7c8b2b6067c8bc": "bf5704a80c9d042bc6710078c7e32648",
".git/objects/4b/7682ba26e9ae9754291cdfa9543a936adb45b8": "97206a78a74db068d1dff563c0e4c9f7",
".git/objects/54/9cce77a3485a7533a552eee3a962e8f23e569b": "0ecc783d8170a72544f77872da5ef6fd",
".git/objects/66/1f26584ce82871cd85c828173df6ea3c3c5e51": "c19ed1531f99989273fe7da298c3f14d",
".git/objects/78/d96963c297ef08c67175054f485bf7bdd0e8fe": "67b60843a816640f5f9f92d56ed472e1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/12e12d021239221bbed75effa2267460f4e70c": "834220e0b8db52f4e836b9e031479fd0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/9999fed7bf9c1603bc9dcfe36eae28bd58938b": "c2bc98207823768597683fe856ec4678",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1f189434f1d84ed6b066c5e3a77eacb378923f": "fbd8e3fb319b2163f1b2726c7bb1c518",
".git/objects/8f/9a48f455cd86bfbaf3344383a1025f8b6f768b": "43cc416fcf3c4e81379e27a2ac2ba704",
".git/objects/91/303b8eede49534d831ecd8f581da0602f06166": "c7284c73b55920fde3087f827aaaf450",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e55249a3feef93619f1ba12fa5686f383ca10c": "f736add68c6a733baae9021b5adcb380",
".git/objects/a6/ee44828de4083b7e1fa8decfa00f01e852738f": "df7d636b2056ac9443e684c233cf4d75",
".git/objects/a7/121e2cf564b701570b2527d27f6e5f425214c6": "7b859821df6eb8643643d4254d1941ab",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/a4f10971ee2fa0737b76fa4a689f2a18c3e5fe": "4c610110e2640a1b9935086e1d8b0396",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ce/86e869b64673bfad89979d61ae2560395c0fcd": "36ded143bf752ae24144315eca2afc16",
".git/objects/d3/8f10107967aa46c0adeb78dfbeeedb2b034979": "b129def7aa0f3c04b8f8f9c514a04fc5",
".git/objects/d6/db441f34fe519a2e50f532a9c97db7e3e5f2e0": "def406d03f0021b79d0bf14111cffab2",
".git/objects/da/1b27c839265278b808c41c7bb90588c21abefc": "1e47864855f6ead4874765d9f4108340",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "f68435480d00ee9437d8251333a166ee",
".git/refs/remotes/origin/master": "f68435480d00ee9437d8251333a166ee",
"assets/AssetManifest.json": "6f8d7e117d384d28f4e5b8073a898ee4",
"assets/Assets/fonts/Almarai.ttf": "484f968404893edf87a29965d05711d3",
"assets/Assets/images/background/background.png": "8ba9cca78e4a2777dc9958f28087ad87",
"assets/Assets/images/background/noimage.png": "03fad063a85d0da6a9a639f16a8273e3",
"assets/FontManifest.json": "38e07ce319f6fccd4f66ba327284cf48",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/localization/ar.json": "bff0c9d0f1085a43dc532b907a451eb2",
"assets/lib/localization/en.json": "fa9cf80f19d5708f8866b69ad7583e19",
"assets/NOTICES": "cf35b23a24d864ada45982496c16dc6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0ce09372e167f83aea23d2cf102c8979",
"/": "0ce09372e167f83aea23d2cf102c8979",
"main.dart.js": "c7d0a2f7d1fa89f80f6051ae2d1f3efb",
"manifest.json": "409665d722b2053f55f5bf5dfc440a1e",
"version.json": "f356afc201478505ce0daa54a08a4f6f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
