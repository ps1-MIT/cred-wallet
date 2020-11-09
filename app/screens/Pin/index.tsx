import React, { FunctionComponent, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { BlurView } from '@react-native-community/blur';

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
    <BlurView style={styles.container} blurAmount={10} blurType="light">
      <SafeAreaView style={styles.safeAreaContainer}>
        <VerifyPanel onVerifySuccess={onVerifySuccess} />
      </SafeAreaView>
    </BlurView>
  );
};
