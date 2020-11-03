import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reactotron from '../services/reactotron';
import { userReducer } from './user';
import rootSaga from '../sagas';

export const rootReducer = combineReducers({ user: userReducer });

//TODO: persistConfig

export type RootState = ReturnType<typeof rootReducer>;

const sagaMonitor = reactotron?.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancers: StoreEnhancer[] = [applyMiddleware(sagaMiddleware)];

if (reactotron) {
  enhancers.push(reactotron?.createEnhancer!());
}

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(rootSaga);

//TODO: persistStore

export type AppDispatch = typeof store.dispatch;

export type AppAction = ReturnType<AppDispatch>;
