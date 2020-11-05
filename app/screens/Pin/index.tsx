import React, { FunctionComponent, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { VerifyPanel } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';

export const PinScreen: FunctionComponent<PinScreenProps> = ({
  navigation,
  route,
}) => {
  const onVerifySuccess = useCallback(() => {
    const isPushedParam = route.params?.isPushed;
    if (isPushedParam) {
      navigation.goBack();
    } else {
      navigation.replace('MainTabs');
    }
  }, [navigation, route.params]);

  return (
    <SafeAreaView style={styles.root}>
      <VerifyPanel onVerifySuccess={onVerifySuccess} />
    </SafeAreaView>
  );
};
