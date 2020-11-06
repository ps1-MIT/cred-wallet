import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { credentialsActionTypes } from './actions';

// Selector hooks
export const useCredentials = () =>
  useSelector((state: RootState) => state.credentials.data);

// Callback hooks
export const useSignCredentialCallback = (dispatch: AppDispatch) =>
  useCallback(
    () => dispatch({ type: credentialsActionTypes.SIGN_CREDENTIAL }),
    [dispatch],
  );
