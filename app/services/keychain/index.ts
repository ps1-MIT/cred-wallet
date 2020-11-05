import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import CONFIG from '../../config/env';

export class Keystore {
  static savePin(newPin: string): Promise<any> {
    return RNSecureKeyStore.set(CONFIG.KEYCHAIN_PIN_KEY, newPin, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  }

  static getPin(): Promise<any> {
    return RNSecureKeyStore.get(CONFIG.KEYCHAIN_PIN_KEY);
  }

  static resetPin(): Promise<any> {
    return RNSecureKeyStore.remove(CONFIG.KEYCHAIN_PIN_KEY);
  }
}
