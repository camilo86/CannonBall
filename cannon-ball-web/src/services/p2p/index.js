import Peer from 'peerjs';
import uuid from 'uuid/v4';
import { getP2PIdSucceded } from './actions';

const peerId = uuid();

// TODO: Obtain peer config from env during build
export const peer = new Peer(peerId, { host: 'localhost', port: 5000, path: '/p2p' });

export default function config(dispatch) {
  dispatch(getP2PIdSucceded(peerId));
}
