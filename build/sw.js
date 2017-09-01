"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["/912ec66d7572ff821749319396470bde.svg","912ec66d7572ff821749319396470bde"],["/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/assets/.DS_Store","1a81811c439151f497295d7f76c38c2e"],["/assets/favicon.ico","489073bca62eb6f3bfd9b68241b2fe3d"],["/assets/icons/.DS_Store","438ac8f59bb9d920e5a04b275a2cc189"],["/assets/icons/android-chrome-192x192.png","64d5dd63fb6f0e1f672fa84b6de318a3"],["/assets/icons/android-chrome-512x512.png","81626d0b750878d234830f6636df5381"],["/assets/icons/apple-touch-icon.png","c56ad79c8574291a849bd801fc3e127b"],["/assets/icons/favicon-16x16.png","84d233ea32d094c976038e4cd11a5f48"],["/assets/icons/favicon-32x32.png","2bda44013976eb2d6417d133e6b8197f"],["/assets/icons/mstile-150x150.png","6856ef0b5ff638a6b601c853e7cc188e"],["/assets/newcastle-large.jpg","9e4e1d8d6f4efb1f85bcc338de57704f"],["/assets/newcastle-medium.jpg","dde14227fd6e8257f5a31eb7deb2ea3a"],["/assets/newcastle-small.jpg","f07de9feb4b96a94cca030577f550cd5"],["/assets/newcastle-xlarge.jpg","fa1386098b541e95769539f4bdb64bf8"],["/assets/newcastle-xsmall.jpg","234e30fcb8d8f3074faf94677f88c158"],["/assets/newcastle.jpg","cfb572d7700e8995aefaf25a49cbb7d9"],["/b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["/bundle.cbd7d.js","e9ce24fe291f36c2c5bbd5232b09e2bb"],["/favicon.ico","489073bca62eb6f3bfd9b68241b2fe3d"],["/fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["/index.html","b8ef529a24065648121d152b8786c287"],["/manifest.json","b8245ad148fcc2577b095a7b00e4103f"],["/style.4bc87.css","ed508a9873eed22b725972bef3ae2ae7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,!1);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});