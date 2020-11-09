import React, { FunctionComponent, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { QRScannerScreenProps } from './qr-scanner.props';
import { styles } from './qr-scanner.styles';

export const QRScannerScreen: FunctionComponent<QRScannerScreenProps> = ({
  navigation,
  // route,
}) => {
  useEffect(() => {
    setTimeout(() => navigation.goBack(), 2000);
  }, []);

  return <SafeAreaView style={styles.root}></SafeAreaView>;
};
