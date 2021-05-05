import { createStore, applyMiddleware } from 'redux';
import createSagaMiddLeware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddLeware = createSagaMiddLeware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddLeware));

sagaMiddLeware.run(rootSaga);

export default store;