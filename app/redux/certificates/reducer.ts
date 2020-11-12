import { createReducer } from 'reduxsauce';
import _ from 'lodash';

import { ICertificate, IIssuer } from '../../utils/types';
import {
  CertificatesAction,
  certificatesActionTypes,
  AddCertificateAction,
  AddCertificateSuccessAction,
  AddCertificateFailureAction,
} from './actions';

export interface CertificatesState {
  data: {
    [issuerId: string]: {
      issuer: IIssuer;
      certificates: ICertificate[];
    };
  };
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE: CertificatesState = {
  data: {},
  error: null,
  isLoading: false,
};

type Handler<A> = (state: CertificatesState, action: A) => CertificatesState;

const addCertificate: Handler<AddCertificateAction> = (state) => ({
  ...state,
  isLoading: true,
});

const addCertificateSuccess: Handler<AddCertificateSuccessAction> = (
  state,
  { certificate, issuer },
) => {
  const newIssuerCertificates = state.data[issuer.id]?.certificates || [];
  const isNewCertificate = !_.find(
    newIssuerCertificates,
    (el) => el.id === certificate.id,
  );
  if (isNewCertificate) {
    newIssuerCertificates.push(certificate);
  }

  return {
    ...state,
    isLoading: false,
    error: null,
    data: {
      ...state.data,
      [issuer.id]: {
        issuer,
        certificates: newIssuerCertificates,
      },
    },
  };
};

const addCertificateFailure: Handler<AddCertificateFailureAction> = (
  state,
  { error },
) => ({
  ...state,
  isLoading: false,
  error,
});

export const certificatesReducer = createReducer<
  CertificatesState,
  CertificatesAction
>(INITIAL_STATE, {
  [certificatesActionTypes.ADD_CERTIFICATE]: addCertificate,
  [certificatesActionTypes.ADD_CERTIFICATE_SUCCESS]: addCertificateSuccess,
  [certificatesActionTypes.ADD_CERTIFICATE_FAILURE]: addCertificateFailure,
});
