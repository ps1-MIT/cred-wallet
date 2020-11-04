import React, { FunctionComponent } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, VerifyPanel } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';

export const PinScreen: FunctionComponent<PinScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Text preset="title">There will be pin...</Text>
      <TouchableOpacity>
        <Text>Verify!</Text>
      </TouchableOpacity> */}
      <VerifyPanel onVerifySuccess={() => navigation.navigate('MainTabs')} />
    </SafeAreaView>
  );
};
