import React, { useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { AddCertificateScreenProps } from './add-certificate.props';
import { styles } from './add-certificate.styles';

export const AddCertificateScreen: React.FunctionComponent<AddCertificateScreenProps> = ({
  navigation,
  route,
}) => {
  const certificate = useMemo(() => route.params.certificate, [route.params]);
  const issuer = useMemo(() => route.params.issuer, [route.params]);

  console.tron.log('AddCertificate screen params: ', certificate, issuer);

  const onYesPress = useCallback(() => {}, []);

  const onNoPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // TODO: UI
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onYesPress}>
        <Text>CONFIRM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNoPress}>
        <Text>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};
