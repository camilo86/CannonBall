import { GET_P2P_ID, GET_P2P_ID_SUCCEDED, GET_P2P_ID_FAILED } from './constants';

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
