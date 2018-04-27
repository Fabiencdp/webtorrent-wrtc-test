const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const WebTorrent = require('webtorrent');
const createTorrent = require('create-torrent');
const wrtc = require('wrtc');

// *
// Create webtorrent instance
global.WRTC = wrtc;
global.WEBTORRENT_ANNOUNCE = createTorrent.announceList.map(arr => arr[0]);
const client = new WebTorrent();

let checkInterval = false;

// *
// Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Range");
  next();
});


/**
 * Request
 *
 */
app.get('/request/:infoHash', function(req, res) {

  const infoHash = req.params.infoHash.toLowerCase();
  let torrent = client.get(infoHash);

  // Torrent already exist
  if ( torrent ) {
    console.log('torrent already exist, restart seeding');
    torrent.destroy();
  }

  torrent = client.add(infoHash, {
    announce: [
      "wss://tracker.btorrent.xyz",
      "wss://tracker.openwebtorrent.com",
      "wss://tracker.fastcast.nz"
    ]
  });

  torrent.on('metadata', () => {
    console.log('on metadata', torrent.infoHash);
  });

  // Log peer count
  checkInterval && clearInterval(checkInterval);
  checkInterval = setInterval(() => {console.log('%s wires active', torrent.wires.length)}, 10000);

  res.send(torrent.infoHash);
});


app.listen(port, () => {
  console.log('client listen on %s', port);
});