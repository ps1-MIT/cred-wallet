import { createReducer } from 'reduxsauce';
import { ICertificate } from '../../utils/types';
import {
  CertificatesAction,
  certificatesActionTypes,
  AddCertificateAction,
  AddCertificateSuccessAction,
  AddCertificateFailureAction,
} from './actions';

export interface CertificatesState {
  data: ICertificate[];
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE: CertificatesState = {
  data: [],
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
  { credential },
) => {
  // TODO: parse credential
  // TODO: create parsed ICertificate instance

  return {
    ...state,
    isLoading: false,
    data: [...state.data],
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
