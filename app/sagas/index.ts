import { all, takeLatest } from 'redux-saga/effects';
import { GetUserAccountAction, userActionTypes } from '../redux/user';

import { getUser } from './user';
import { appStateListenerSaga } from './event-channel';

export default function* rootSaga() {
  yield all([
    // Event Channels
    appStateListenerSaga(),

    takeLatest<GetUserAccountAction>(userActionTypes.GET_USER, getUser),
  ]);
}
