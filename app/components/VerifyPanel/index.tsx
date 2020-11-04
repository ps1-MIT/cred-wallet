import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';

import { CIPHERS_BY_ROWS, PIN_LENGTH } from './verify-panel.options';
import { CipherRowProps, VerifyPanelProps } from './verify-panel.props';
import { styles, cipherRowStyles } from './verify-panel.styles';
import { DotsProgress } from '../DotsProgress';

const CipherRow: React.FunctionComponent<CipherRowProps> = ({
  ciphers,
  onCipherPress,
}) => {
  const renderCipherCell = useCallback(
    (cipher: number) => {
      return (
        <TouchableOpacity
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
  const [enteredPin, setEnteredPin] = useState<string>('');

  useEffect(() => {
    if (enteredPin.length === PIN_LENGTH) {
      onPinAction();
    }
  }, [enteredPin]);

  const onPinAction = useCallback(() => {
    console.tron.log('enteredPin', enteredPin);
    //TODO
    onVerifySuccess();
    setEnteredPin('');
  }, [enteredPin, setEnteredPin]);

  const onCipherPress = useCallback(
    (cipher: number) => setEnteredPin(enteredPin + cipher),
    [enteredPin, setEnteredPin],
  );

  return (
    <View style={styles.container}>
      <View style={styles.panelHeaderContainer}>
        <Text style={styles.panelHeaderTitle}>Enter your PIN code</Text>
        <DotsProgress
          filledDotsAmount={enteredPin.length}
          dotsAmount={PIN_LENGTH}
        />
      </View>
      <FlatList
        data={CIPHERS_BY_ROWS}
        renderItem={({ item: ciphers }) => (
          <CipherRow ciphers={ciphers} onCipherPress={onCipherPress} />
        )}
        keyExtractor={(item, index) => `cipher-row-${item.join()}-${index}`}
        scrollEnabled={false}
        contentContainerStyle={styles.listContentContainer}
        style={styles.listContainer}
      />
    </View>
  );
};
