import { configureStore } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import rootReducer from '../reducers';
import { p2pMiddleware } from '../services/p2p';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, p2pMiddleware]
});

sagaMiddleware.run(sagas);

export default store;
