import { createReducer } from 'reduxsauce';
import { Credential } from '../../services/api/api.types';
import {
  CredentialsAction,
  credentialsActionTypes,
  SignCredentialAction,
  SignCredentialFailureAction,
  SignCredentialSuccessAction,
} from './actions';

export interface CredentialsState {
  data: Credential[];
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE: CredentialsState = {
  data: [],
  error: null,
  isLoading: false,
};

type Handler<A> = (state: CredentialsState, action: A) => CredentialsState;

const signCredential: Handler<SignCredentialAction> = (state) => ({
  ...state,
  isLoading: true,
});

const signCredentialSuccess: Handler<SignCredentialSuccessAction> = (
  state,
  { credential },
) => {
  return {
    ...state,
    isLoading: false,
    data: [...state.data, credential],
  }
});

const signCredentialFailure: Handler<SignCredentialFailureAction> = (
  state,
  { error },
) => ({
  ...state,
  isLoading: false,
  error,
});

export const credentialsReducer = createReducer<CredentialsState, CredentialsAction>(
  INITIAL_STATE,
  {
    [credentialsActionTypes.SIGN_CREDENTIAL]: signCredential,
    [credentialsActionTypes.SIGN_CREDENTIAL_SUCCESS]: signCredentialSuccess,
    [credentialsActionTypes.SIGN_CREDENTIAL_FAILURE]: signCredentialFailure,
  },
);
