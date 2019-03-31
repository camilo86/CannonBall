import Peer from 'peerjs';

// TODO: Obtain peer config from env during build
export const peer = new Peer({ host: 'localhost', port: 5000, path: '/p2p' });
