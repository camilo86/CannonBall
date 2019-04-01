import { configureStore } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(sagas);

export default store;
