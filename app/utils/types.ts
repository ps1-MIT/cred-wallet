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

export interface ICertificate {}

export interface ICertificateDeeplink {
  challenge: any;
  requestUrl: any;
}

export interface ISubjectDID {
  did: string;
}

export interface ICertificateDeeplinkWithDID
  extends ICertificateDeeplink,
    ISubjectDID {}
