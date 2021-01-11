import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { watchData } from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare, logger)),
);
sagaMiddleWare.run(watchData);
