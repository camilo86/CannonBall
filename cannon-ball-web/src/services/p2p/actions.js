import {
  GET_P2P_ID,
  GET_P2P_ID_SUCCEDED,
  GET_P2P_ID_FAILED,
  CONNECT_TO_REMOTE,
  CONNECT_TO_REMOTE_SUCCEDED,
  CONNECT_TO_REMOTE_FAILED,
  ON_REMOTE_CONNECTED
} from './constants';

export function getP2PId() {
  return {
    type: GET_P2P_ID,
  };
}

export function getP2PIdSucceded(id) {
  return {
    type: GET_P2P_ID_SUCCEDED,
    id,
  };
}

export function getP2PIdFailed(error) {
  return {
    type: GET_P2P_ID_FAILED,
    error,
  };
}

export function connectToRemote(remoteId) {
  return {
    type: CONNECT_TO_REMOTE,
    remoteId,
  };
}

export function connectToRemoteSucceded() {
  return {
    type: CONNECT_TO_REMOTE_SUCCEDED,
  };
}

export function connectToRemoteFailed(error) {
  return {
    type: CONNECT_TO_REMOTE_FAILED,
    error,
  };
}

export function onRemoteConnected(remote) {
  return {
    type: ON_REMOTE_CONNECTED,
    remote,
  };
}
