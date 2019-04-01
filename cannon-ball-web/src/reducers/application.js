import { GET_FILESHARE_ID_SUCCEDED } from '../constants/fileshare';
import { GET_P2P_ID_SUCCEDED } from '../services/p2p/constants';

export const initialState = {
  id: '',
  fileshareId: '',
};

function applicationReducer(state = initialState, action) {
  switch(action.type) {
    case GET_FILESHARE_ID_SUCCEDED:
      return { ...state, fileshareId: action.id };
    case GET_P2P_ID_SUCCEDED:
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default applicationReducer;
