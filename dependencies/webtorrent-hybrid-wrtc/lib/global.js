var createTorrent = require('create-torrent')

// WRTC version
var wrtc1 = require('../../node-webrtc-0.1.1')
var wrtc2 = require('../../node-webrtc-0.1.2')

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map((arr) => arr[0])
  .filter((url) => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0);

global.WRTC = wrtc1;


// *
// Old electron stuff
// global.WRTC = function () {
//   var wrtc = wrtc
//
//   process.on('SIGINT', ensureCloseElectron)
//   process.on('SIGTERM', ensureCloseElectron)
//
//   wrtc.on('error', function (err, source) {
//     if (err.message !== 'Daemon already closed') {
//       console.error(err, source)
//     }
//   })
//
//   function ensureCloseElectron () {
//     process.removeListener('SIGINT', ensureCloseElectron)
//     process.removeListener('SIGTERM', ensureCloseElectron)
//     wrtc.close()
//   }
//
//   return wrtc
// }
