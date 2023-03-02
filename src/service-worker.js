import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
//import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
//precacheAndRoute(self.__WB_MANIFEST);
const ignored = self.__WB_MANIFEST;

const versionStyles = 1.03;
const versionScripts = 1.03;
const versionImages = 1.03;
const versionFonts = 1.03;
const versionHtmls = 1.03;
//const versionOffline = 1.03;


const cachesCurrent = {
	styles: `styles-${versionStyles}`,
	scripts: `scripts-${versionScripts}`,
	images: `images-${versionImages}`,
	fonts: `fonts-${versionFonts}`,
	htmls: `htmls-${versionHtmls}`,
	//offline: `offline-fallbacks-${versionOffline}`
};


clientsClaim();
//navigationPreload.enable();

// Handle styles:
const stylesRoute = new Route(({ request }) => {
	return request.destination === "style";
}, new CacheFirst({
	cacheName: cachesCurrent.styles,
	plugins: [
		new ExpirationPlugin({
		  maxAgeSeconds: 60 * 60 * 24 * 30,
		  maxEntries: 20,
		})
	  ]
}));

const scriptsRoute = new Route(({ request }) => {
	return request.destination === "script";
}, new CacheFirst({
	cacheName: cachesCurrent.scripts,
	plugins: [
		new ExpirationPlugin({
		  maxAgeSeconds: 60 * 60 * 24 * 30,
		  maxEntries: 20,
		})
	  ]
}));

const imagesRoute = new Route(({ request }) => {
	return request.destination === "image";
}, new CacheFirst({
	cacheName: cachesCurrent.images,
	plugins: [
		new ExpirationPlugin({
		  maxAgeSeconds: 60 * 60 * 24 * 30,
		  maxEntries: 100,
		})
	  ]
}));


const fontsRoute = new Route(({ request }) => {
	return request.destination === "font";
}, new StaleWhileRevalidate({
	cacheName: cachesCurrent.fonts,
	plugins: [
		new ExpirationPlugin({
		  maxAgeSeconds: 60 * 60 * 24 * 30,
		  maxEntries: 10,
		})
	  ]
}));


const htmlsRoute = new Route(({ request }) => {
	return request.destination === "document";
}, new StaleWhileRevalidate({
	cacheName: cachesCurrent.htmls
}));


registerRoute(stylesRoute);
registerRoute(scriptsRoute);
registerRoute(imagesRoute);
registerRoute(fontsRoute);
registerRoute(htmlsRoute);



// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});



//auto set new sw
self.addEventListener("install", event => {
	console.log("ServiceWorker will be updated in a moment...");
	/*const files = ["./pages/page404/page404.tsx"]; // you can add more resources here
	event.waitUntil(
	  self.caches.open(cachesCurrent.offline)
		  .then(cache => cache.addAll(files))
	);*/
	self.skipWaiting();
}); 


self.addEventListener("activate", async event => {
	/*if (self.registration.navigationPreload) {
		await self.registration.navigationPreload.enable();
	}*/
	const siteCahceKeys = await caches.keys();
	const cacheKeys = Object.values(cachesCurrent);

	await siteCahceKeys
		.filter(cache => {
			return !cacheKeys.includes(cache);
		})
		.forEach(async cache => await caches.delete(cache));
}); 

//const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
//const imageType = new RegExp("/(jpe?g|png|gif|bmp)$/");
