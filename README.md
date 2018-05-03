# webtorrent-wrtc-test
Just a little test using [wrtc](https://github.com/js-platform/node-webrtc) instead of electron with [webtorrent](https://github.com/webtorrent/webtorrent)

## Install
Clone this repo and install dependencies with `npm install`

## Use 
Find a torrent infoHash first. 

- Run the server with `npm start`
- Open https://intant.io/#{infoHash} on one tab.
- Open http://localhost:4000/request/{infoHash} on another one to start seeding through webRTC. 

## Switching version 
Work with wrtc [v0.1.0](https://github.com/js-platform/node-webrtc/tree/v0.1.0) and [v0.1.1](https://github.com/js-platform/node-webrtc/tree/v0.1.1).

You can change current wrtc version in ./dependencies/webtorrent-hybrid-wrtc/lib/global.js.