export type VerifyPanelStatus =
  | 'check-biometric-verify'
  | 'check-pin-keychain'
  | 'pin-create'
  | 'pin-create-verify'
  | 'save-pin-keychain'
  | 'pin-enter'
  | 'pin-verify'
  | 'biometric-verify'
  | 'verified';

export interface ICredential {}

export interface ICertificateDeeplink {
  challenge: any;
  requestUrl: any;
}
