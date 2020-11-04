import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';

import {
  CIPHERS_BY_ROWS,
  PANEL_STATUS,
  PIN_LENGTH,
} from './verify-panel.options';
import { CipherRowProps, VerifyPanelProps } from './verify-panel.props';
import { styles, cipherRowStyles } from './verify-panel.styles';
import { DotsProgress } from '../DotsProgress';
import { VerifyPanelStatus } from '../../utils/types';

const CipherRow: React.FunctionComponent<CipherRowProps> = ({
  ciphers,
  isDisabled,
  onCipherPress,
}) => {
  const renderCipherCell = useCallback(
    (cipher: number) => {
      return (
        <TouchableOpacity
          disabled={isDisabled}
          key={`cipher-cell-${cipher}`}
          onPress={() => onCipherPress(cipher)}
          style={cipherRowStyles.cipherContainer}
        >
          <Text style={cipherRowStyles.cipherText}>{cipher}</Text>
        </TouchableOpacity>
      );
    },
    [onCipherPress],
  );

  return (
    <View style={cipherRowStyles.container}>
      {_.map(ciphers, renderCipherCell)}
    </View>
  );
};

export const VerifyPanel: React.FunctionComponent<VerifyPanelProps> = ({
  onVerifySuccess,
}) => {
  const [panelStatus, setPanelStatus] = useState<VerifyPanelStatus>(
    PANEL_STATUS.UNDEFINED,
  );
  const [enteredPin, setEnteredPin] = useState<string>('');
  const [isEnterPinAvailable, setIsEnterPinAvailable] = useState<boolean>(
    false,
  );

  useEffect(() => {
    if (enteredPin.length === PIN_LENGTH) {
      switch (panelStatus) {
        case PANEL_STATUS.PIN_CREATE:
          setIsEnterPinAvailable(false);
          setPanelStatus(PANEL_STATUS.SAVE_PIN_KEYCHAIN);
          break;
        case PANEL_STATUS.PIN_ENTER:
          setIsEnterPinAvailable(false);
          setPanelStatus(PANEL_STATUS.PIN_VERIFY);
          break;
      }

      setEnteredPin('');
    }
  }, [enteredPin]);

  const checkTouchID = useCallback(() => {
    //TODO if touchID -> setPanelStatus(PANEL_STATUS.TOUCH_ID);
    //     else setPanelStatus(PANEL_STATUS.CHECK_PIN_KEYCHAIN);
  }, [setPanelStatus]);

  const checkPinKeychain = useCallback(() => {
    //TODO if pin exists in keychain -> setPinForCheck, setPanelStatus(PANES_STATUS.PIN_ENTER)
    //     else setPanelStatus(PANEL_STATUS.PIN_CREATE), setPinKeychain
  }, [setPanelStatus]);

  const activatePinInput = useCallback(() => setIsEnterPinAvailable(true), [
    setPanelStatus,
    setIsEnterPinAvailable,
  ]);

  const savePinToKeychain = useCallback(() => {
    //TODO KeychainPinSave
    setPanelStatus(PANEL_STATUS.PIN_ENTER);
  }, [setPanelStatus]);

  const verifyEnteredPin = useCallback(() => {
    //TODO get pin Keychain if success -> setPanelStatus(PANEL_STATUS.VERIFIED)
    //     else -> nothing (wrong attempt)
  }, [enteredPin, setPanelStatus]);

  const launchTouchID = useCallback(() => {
    //TODO if touchID success -> setPanelStatus(PANEL_STATUS.VERIFIED)
    //     else setPanelStatus(PANEL_STATUS.CHECK_PIN_KEYCHAIN)
  }, [setPanelStatus]);

  useEffect(() => {
    switch (panelStatus) {
      default:
      case PANEL_STATUS.UNDEFINED:
        checkTouchID();
        break;
      case PANEL_STATUS.CHECK_PIN_KEYCHAIN:
        checkPinKeychain();
        break;
      case PANEL_STATUS.PIN_CREATE:
      case PANEL_STATUS.PIN_ENTER:
        activatePinInput();
        break;
      case PANEL_STATUS.SAVE_PIN_KEYCHAIN:
        savePinToKeychain();
      case PANEL_STATUS.PIN_VERIFY:
        verifyEnteredPin();
        break;
      case PANEL_STATUS.TOUCH_ID:
        launchTouchID();
        break;
      case PANEL_STATUS.VERIFIED:
        onVerifySuccess();
        break;
    }
  }, [panelStatus]);

  const onCipherPress = useCallback(
    (cipher: number) => setEnteredPin(enteredPin + cipher),
    [enteredPin, setEnteredPin],
  );

  const getStatusLabel = useCallback((): string => {
    switch (panelStatus) {
      default:
        return 'Loading..';
      case PANEL_STATUS.PIN_CREATE:
        return 'Create PIN';
      case PANEL_STATUS.PIN_ENTER:
        return 'Enter PIN';
      case PANEL_STATUS.TOUCH_ID:
        return 'Touch ID';
      case PANEL_STATUS.VERIFIED:
        return 'Verified';
    }
  }, [panelStatus]);

  return (
    <View style={styles.container}>
      <View style={styles.panelHeaderContainer}>
        <Text style={styles.panelHeaderTitle}>{getStatusLabel()}</Text>
        <DotsProgress
          filledDotsAmount={enteredPin.length}
          dotsAmount={PIN_LENGTH}
        />
      </View>
      <FlatList
        data={CIPHERS_BY_ROWS}
        renderItem={({ item: ciphers }) => (
          <CipherRow
            ciphers={ciphers}
            onCipherPress={onCipherPress}
            isDisabled={!isEnterPinAvailable}
          />
        )}
        keyExtractor={(item, index) => `cipher-row-${item.join()}-${index}`}
        scrollEnabled={false}
        contentContainerStyle={styles.listContentContainer}
        style={styles.listContainer}
      />
    </View>
  );
};
