import { call, put } from 'redux-saga/effects';
import { AddCertificateAction } from '../redux/certificates';
import { apiInstance } from '../services/api';

export function* addCertificate({ data }: AddCertificateAction) {
  console.tron.log(data);

  const response = yield call(
    apiInstance.addCertificate,
    `${data.requestUrl}/nodidproof`,
    {
      holder: data.did,
    },
  );

  console.tron.log(response);
}
