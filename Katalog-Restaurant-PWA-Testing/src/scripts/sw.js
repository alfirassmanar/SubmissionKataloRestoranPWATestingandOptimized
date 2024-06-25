import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './icons/icon-32x32.png',
  './icons/icon-96x96.png',
  './icons/icon-48x48.png',
  './icons/icon-64x64.png',
  './icons/icon-72x72.png',
  './icons/icon-256x256.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

// import { precacheAndRoute } from 'workbox-precaching';
// import { registerRoute, Route } from 'workbox-routing';
// import { StaleWhileRevalidate } from 'workbox-strategies';

// // Do precaching
// precacheAndRoute(self.__WB_MANIFEST);

// const restaurantAPI = new Route(
//   ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
//   new StaleWhileRevalidate({
//     cacheName: 'Sukamaju-restaurant',
//   }),
// );

// const restaurantImageAPI = new Route(
//   ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
//   new StaleWhileRevalidate({
//     cacheName: 'Sukamaju-img',
//   }),
// );

// registerRoute(restaurantAPI);
// registerRoute(restaurantImageAPI);

// self.addEventListener('install', () => {
//   console.log('Service Worker: Installed');
//   self.skipWaiting();
// });

// self.addEventListener('push', (event) => {
//   console.log('Service Worker: Pushed');

//   const notificationData = {
//     title: 'Push Notification',
//     options: {
//       body: 'This is a push notification',
//       icon: '/favicon.png',
//       image: '/icon-512x512/icon-512x512.jpg',
//     },
//   };

//   const showNotification = self.registration.showNotification(
//     notificationData.title,
//     notificationData.options,
//   );

//   event.waitUntil(showNotification);
// });
