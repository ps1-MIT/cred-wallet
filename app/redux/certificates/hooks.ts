import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import {
  ICertificate,
  ICertificateDeeplinkWithDID,
  IIssuer,
} from '../../utils/types';
import { certificatesActionTypes } from './actions';

// Selector hooks
export const useIssuerCertificates = () =>
  useSelector((state: RootState) => state.certificates.data);

// Callback hooks
export const useAddCertificateCallback = (dispatch: AppDispatch) =>
  useCallback(
    (data: ICertificateDeeplinkWithDID) =>
      dispatch({ type: certificatesActionTypes.ADD_CERTIFICATE, data }),
    [dispatch],
  );

export const useAddCertificateSuccessCallback = (dispatch: AppDispatch) =>
  useCallback(
    (certificate: ICertificate, issuer: IIssuer) =>
      dispatch({
        type: certificatesActionTypes.ADD_CERTIFICATE_SUCCESS,
        certificate,
        issuer,
      }),
    [],
  );
