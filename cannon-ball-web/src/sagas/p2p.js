import { takeEvery } from 'redux-saga/effects';
import { toaster } from 'evergreen-ui';
import { ON_REMOTE_CONNECTED } from '../services/p2p/constants';

function* onRemoteConnectedSaga() {
  toaster.success(`Somebody is ready to recieve your files`);
}

export default [
  takeEvery(ON_REMOTE_CONNECTED, onRemoteConnectedSaga),
];
