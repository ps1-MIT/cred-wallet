import React, { FunctionComponent, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';

export const PinScreen: FunctionComponent<PinScreenProps> = ({
  navigation,
}) => {
  useEffect(() => {
    // TODO: Timeout for loading simulation. Replace it with data fetching
    setTimeout(() => navigation.replace('MainTabs'), 500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <Text preset="title">There will be pin...</Text>
    </SafeAreaView>
  );
};
