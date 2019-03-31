import { GET_P2P_ID_SUCCEDED } from '../services/p2p/constants';

export const initialState = {
  id: '',
};

function applicationReducer(state = initialState, action) {
  switch(action.type) {
    case GET_P2P_ID_SUCCEDED:
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default applicationReducer;
