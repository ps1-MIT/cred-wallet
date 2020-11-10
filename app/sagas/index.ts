import { all, takeLatest } from 'redux-saga/effects';
import { GetUserAccountAction, userActionTypes } from '../redux/user';
import {
  AddCertificateAction,
  certificatesActionTypes,
} from '../redux/certificates';

import { getUser } from './user';
import { addCertificate } from './certificates';
import { appStateListenerSaga } from './event-channel';

export default function* rootSaga() {
  yield all([
    // Event Channels
    appStateListenerSaga(),

    // User
    takeLatest<GetUserAccountAction>(userActionTypes.GET_USER, getUser),

    // Certificates
    takeLatest<AddCertificateAction>(
      certificatesActionTypes.ADD_CERTIFICATE,
      addCertificate,
    ),
  ]);
}
