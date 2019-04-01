import { takeLatest, put } from 'redux-saga/effects';
import { toaster } from 'evergreen-ui';
import { encodeFileshareIdSucceded, decodeFileshareIdSucceded } from '../actions/fileshare';
import { ENCODE_FILESHARE_ID, DECODE_FILESHARE_ID, ENCODE_FILESHARE_ID_SUCCEDED, DECODE_FILESHARE_ID_SUCCEDED } from '../constants/fileshare';
import { connectToRemote } from '../services/p2p/actions';

function* encodeFileshareIdSaga({ id }) {
  const fileshareId = encodeURIComponent(window.btoa(id));

  yield put(encodeFileshareIdSucceded(fileshareId));
}

function* decodeFileshareIdSaga({ fileshareId }) {
  const remoteId = decodeURIComponent(window.atob(fileshareId));

  yield put(decodeFileshareIdSucceded(remoteId));
}

function* encodeFileshareIdSuccededSaga({ fileshareId }) {
  yield toaster.notify(`File URL: http://localhost:3000/fileshare/${fileshareId}`);
}

function* decodeFileshareIdSuccededSaga({ remoteId }) {
  yield put(connectToRemote(remoteId));
}

export default [
  takeLatest(ENCODE_FILESHARE_ID, encodeFileshareIdSaga),
  takeLatest(DECODE_FILESHARE_ID, decodeFileshareIdSaga),
  takeLatest(ENCODE_FILESHARE_ID_SUCCEDED, encodeFileshareIdSuccededSaga),
  takeLatest(DECODE_FILESHARE_ID_SUCCEDED, decodeFileshareIdSuccededSaga),
];
