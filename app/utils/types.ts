export type VerifyPanelStatus =
  | 'undefined'
  | 'check-pin-keychain'
  | 'pin-create'
  | 'save-pin-keychain'
  | 'pin-enter'
  | 'pin-verify'
  | 'biometric-verify'
  | 'verified';

export interface ICredential {}
