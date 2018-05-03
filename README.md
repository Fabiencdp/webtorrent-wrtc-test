# webtorrent-wrtc-test
Just a little test using [wrtc](https://github.com/js-platform/node-webrtc) instead of electron with [webtorrent](https://github.com/webtorrent/webtorrent)

## Install
Clone this repo and install dependencies with `npm install`.

This repo contain a custom webtorrent-hybrid version (without electron), and two versions of wrtc for testing purpose.
Npm will build binaries of both wrtc modules.

## Use 
Find a torrent infoHash first. 

- Run the server with `npm start`
- Open http://localhost:4000/request/{infoHash} to start seeding through webRTC. 
- Open https://intant.io/#{infoHash} on another tab.

## Switching version 
Work almost well with wrtc [v0.1.0](https://github.com/js-platform/node-webrtc/tree/v0.1.0) and [v0.1.1](https://github.com/js-platform/node-webrtc/tree/v0.1.1).
Don't work with wrtc >= 0.1.2. 

NPM should have installed and build wrtc version 0.1.1 and 0.1.2.
You can switch and test versions in ./dependencies/webtorrent-hybrid-wrtc/lib/global.js.