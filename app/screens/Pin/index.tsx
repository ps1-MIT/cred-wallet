import React, { FunctionComponent } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';

export const PinScreen: FunctionComponent<PinScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Text preset="title">There will be pin...</Text>
      <TouchableOpacity onPress={() => navigation.replace('MainTabs')}>
        <Text>Verify!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
