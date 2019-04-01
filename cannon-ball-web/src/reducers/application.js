import { GET_P2P_ID_SUCCEDED } from '../services/p2p/constants';
import {
  DECODE_FILESHARE_ID_SUCCEDED, ENCODE_FILESHARE_ID,
} from '../constants/fileshare';

export const initialState = {
  id: '',
  remoteId: '',
  fileshareId: '',
};

function applicationReducer(state = initialState, action) {
  switch(action.type) {
    case ENCODE_FILESHARE_ID:
      return { ...state, fileshareId: action.fileshareId };
    case DECODE_FILESHARE_ID_SUCCEDED:
      return { ...state, remoteId: action.remoteId };
    case GET_P2P_ID_SUCCEDED:
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default applicationReducer;
