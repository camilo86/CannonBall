import Peer from 'peerjs';
import uuid from 'uuid/v4';
import { getP2PIdSucceded, onRemoteConnected } from './actions';
import { CONNECT_TO_REMOTE } from './constants';

const peerId = uuid();

// TODO: Obtain peer config from env during build
export const peer = new Peer(peerId, { host: 'localhost', port: 5000, path: '/p2p' });

var originConn = null;
const connectToRemote = remoteId => {
  originConn = peer.connect(remoteId);

  originConn.on('open', () => {
    originConn.on('data', data => console.log(data));
    originConn.on('error', error => console.error(error));
  })
}

export const p2pMiddleware = store => next => action => {
  switch(action.type) {
    case CONNECT_TO_REMOTE:
      connectToRemote(action.remoteId);
      break;
    default:
      break;;
  }

  next(action);
}

var remoteConn = null;
export default function config(dispatch) {
  dispatch(getP2PIdSucceded(peerId));

  peer.on('connection', conn => {
    conn.on('open', () => {
      remoteConn = conn;

      dispatch(onRemoteConnected(remoteConn));
      remoteConn.send('Hello from the other side')
    })
  });
}
