import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reactotron } from '../services/reactotron';
import { userReducer } from './user';
import rootSaga from '../sagas';

export const rootReducer = combineReducers({ user: userReducer });

export type RootState = ReturnType<typeof rootReducer>;

const sagaMonitor = reactotron?.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer = compose(applyMiddleware(sagaMiddleware), reactotron?.createEnhancer!());

export const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch;

export type AppAction = ReturnType<AppDispatch>;

sagaMiddleware.run(rootSaga);
