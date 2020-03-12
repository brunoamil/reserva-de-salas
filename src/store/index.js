import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Sagas';
import reducers from './ducks';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
