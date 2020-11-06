export type VerifyPanelStatus =
  | 'undefined'
  | 'check-pin-keychain'
  | 'pin-create'
  | 'save-pin-keychain'
  | 'pin-enter'
  | 'pin-verify'
  | 'touch-id'
  | 'verified';

export interface ICredential {}
