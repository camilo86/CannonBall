import { takeLatest, put } from 'redux-saga/effects';
import { toaster } from 'evergreen-ui';
import { GET_P2P_ID_SUCCEDED } from '../services/p2p/constants';
import { getFileshareIDSucceded } from '../actions/fileshare';

function* getP2PIdSuccededSaga({ id }) {
  const codedId = encodeURIComponent(window.btoa(id));
  yield put(getFileshareIDSucceded(codedId));

  toaster.notify(`File URL: http://localhost:3000/fileshare/${codedId}`);
}

export default [
  takeLatest(GET_P2P_ID_SUCCEDED, getP2PIdSuccededSaga),
];
