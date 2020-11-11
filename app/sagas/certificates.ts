import { call, put } from 'redux-saga/effects';
import {
  AddCertificateAction,
  AddCertificateFailureAction,
  AddCertificateSuccessAction,
  certificatesActionCreators,
} from '../redux/certificates';
import { apiInstance } from '../services/api';
import CONFIG from '../config/env';
import { ApiResponse } from 'apisauce';
import { Credential } from '../services/api/api.types';

export function* addCertificate({ data }: AddCertificateAction) {
  const response: ApiResponse<Credential, Credential> = yield call(
    apiInstance.addCertificate,
    `${data.requestUrl.replace(CONFIG.API_URL, '')}/nodidproof`,
    {
      holder: data.did,
      ...data,
    },
  );

  console.tron.log(response);
  if (response.ok) {
    yield put<AddCertificateSuccessAction>(
      certificatesActionCreators.addCertificateSuccess(response.data!),
    );
  } else {
    yield put<AddCertificateFailureAction>(
      certificatesActionCreators.addCertificateFailure('Some went wrong'),
    );
  }
}
