import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { QRScannerScreenProps } from './qr-scanner.props';
import { styles } from './qr-scanner.styles';

export const QRScannerScreen: FunctionComponent<QRScannerScreenProps> = ({
  navigation,
  // route,
}) => {
  const onSuccess = useCallback((e) => {
    console.tron.log(e.data);
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        // topContent={
        //   <Text>
        //     Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and
        //     scan the QR code.
        //   </Text>
        // }
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};
