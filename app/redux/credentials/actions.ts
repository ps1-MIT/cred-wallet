import { createActions } from 'reduxsauce';
import { Credential } from '../../services/api/api.types';

interface CredentialsActionTypes {
  SIGN_CREDENTIAL: 'SIGN_CREDENTIAL';
  SIGN_CREDENTIAL_SUCCESS: 'GET_CREDENTIAL_SUCCESS';
  SIGN_CREDENTIAL_FAILURE: 'GET_CREDENTIAL_FAILURE';
}

export interface SignCredentialAction {
  type: CredentialsActionTypes['SIGN_CREDENTIAL'];
}

export interface SignCredentialSuccessAction {
  type: CredentialsActionTypes['SIGN_CREDENTIAL_SUCCESS'];
  credential: Credential;
}

export interface SignCredentialFailureAction {
  type: CredentialsActionTypes['SIGN_CREDENTIAL_FAILURE'];
  error: string;
}

interface CredentialsActionCreators {
  signCredential(): SignCredentialAction;
  signCredentialSuccess(credential: Credential): SignCredentialSuccessAction;
  signCredentialFailure(error: string): SignCredentialFailureAction;
}

export type CredentialsAction =
  | SignCredentialAction
  | SignCredentialSuccessAction
  | SignCredentialFailureAction;

const { Types, Creators } = createActions<
  CredentialsActionTypes,
  CredentialsActionCreators
>(
  {
    signCredential: null,
    signCredentialSuccess: ['credential'],
    signCredentialFailure: ['error'],
  },
  {
    prefix: 'CREDENTIALS/',
  },
);

export const credentialsActionTypes = Types;

export const credentialsActionCreators = Creators;
