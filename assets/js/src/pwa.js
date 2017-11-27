/* eslint no-console:off */

(function setupSW() {
  'use strict'

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function (registration) { // eslint-disable-line compat/compat
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
        registration.onupdatefound = function () {
          var installingWorker = registration.installing
          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) { // eslint-disable-line compat/compat
                  console.log('ServiceWorker: New update available.')
                  registration.update()
                }
                break

              default:
            }
          }
        }
      }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err)
      })
    })
  } else {
    console.log('Service workers are not supported.')
  }
}())
