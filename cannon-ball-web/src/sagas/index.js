import { all } from 'redux-saga/effects';

import application from './application';
import p2p from './p2p';

export default function* rootSaga() {
  yield all([
    ...application,
    ...p2p,
  ]);
}
