import { VerifyPanelStatus } from '../../utils/types';

const CIPHERS_FIRST_ROW: number[] = [1, 2, 3];
const CIPHERS_SECOND_ROW: number[] = [4, 5, 6];
const CIPHERS_THIRD_ROW: number[] = [7, 8, 9];
const CIPHERS_ZERO: number[] = [0];

export const CIPHERS_BY_ROWS: number[][] = [
  CIPHERS_FIRST_ROW,
  CIPHERS_SECOND_ROW,
  CIPHERS_THIRD_ROW,
  CIPHERS_ZERO,
];

export const PIN_LENGTH = 4;

type VerifyPanelStatusKeys =
  | 'CHECK_BIOMETRIC_VERIFY'
  | 'CHECK_PIN_KEYCHAIN'
  | 'PIN_CREATE'
  | 'PIN_CREATE_VERIFY'
  | 'SAVE_PIN_KEYCHAIN'
  | 'PIN_ENTER'
  | 'PIN_VERIFY'
  | 'BIOMETRIC_VERIFY'
  | 'VERIFIED';
export const PANEL_STATUS: Record<VerifyPanelStatusKeys, VerifyPanelStatus> = {
  CHECK_BIOMETRIC_VERIFY: 'check-biometric-verify',
  CHECK_PIN_KEYCHAIN: 'check-pin-keychain',
  PIN_CREATE: 'pin-create',
  PIN_CREATE_VERIFY: 'pin-create-verify',
  SAVE_PIN_KEYCHAIN: 'save-pin-keychain',
  PIN_ENTER: 'pin-enter',
  PIN_VERIFY: 'pin-verify',
  BIOMETRIC_VERIFY: 'biometric-verify',
  VERIFIED: 'verified',
};
