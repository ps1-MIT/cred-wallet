import { all, takeLatest } from 'redux-saga/effects';
import { GetUserAccountAction, userActionTypes } from '../redux/user';

import { getUser } from './user';
import { appStateListenerSaga } from './appState';

export default function* rootSaga() {
  yield all([
    appStateListenerSaga(),
    takeLatest<GetUserAccountAction>(userActionTypes.GET_USER, getUser),
  ]);
}
