import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { certificatesActionTypes } from './actions';

// Selector hooks
export const useCertificates = () =>
  useSelector((state: RootState) => state.certificates.data);

// Callback hooks
export const useAddCertificateCallback = (dispatch: AppDispatch) =>
  useCallback(
    () => dispatch({ type: certificatesActionTypes.ADD_CERTIFICATE }),
    [dispatch],
  );
