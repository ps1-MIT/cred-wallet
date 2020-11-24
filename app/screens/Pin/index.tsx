import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';

import { VerifyPanel } from '../../components';
import { PinScreenProps } from './pin.props';
import { styles } from './pin.styles';
import { isAndroid, isIOS } from '../../utils';

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

  const mainPageContent = useMemo(
    () => (
      <SafeAreaView
        style={[
          styles.safeAreaContainer,
          isAndroid ? styles.backgroundWhite : null,
        ]}
      >
        <VerifyPanel onVerifySuccess={onVerifySuccess} />
      </SafeAreaView>
    ),
    [isAndroid, onVerifySuccess],
  );

  // Render BlurView only for iOS
  return isIOS ? (
    <BlurView style={styles.container} blurAmount={10} blurType="light">
      {mainPageContent}
    </BlurView>
  ) : (
    mainPageContent
  );
};
