import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { ICertificateDeeplinkWithDID } from '../../utils/types';
import { certificatesActionTypes } from './actions';

// Selector hooks
export const useCertificates = () =>
  useSelector((state: RootState) => state.certificates.data);

// Callback hooks
export const useAddCertificateCallback = (dispatch: AppDispatch) =>
  useCallback(
    (data: ICertificateDeeplinkWithDID) =>
      dispatch({ type: certificatesActionTypes.ADD_CERTIFICATE, data }),
    [dispatch],
  );
