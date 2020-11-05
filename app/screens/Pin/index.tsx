import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { VerifyPanel } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';

export const PinScreen: FunctionComponent<PinScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      <VerifyPanel onVerifySuccess={() => navigation.replace('MainTabs')} />
    </SafeAreaView>
  );
};
