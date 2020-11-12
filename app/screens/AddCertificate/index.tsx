import React, { useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { useAddCertificateSuccessCallback } from '../../redux/certificates';
import { AddCertificateScreenProps } from './add-certificate.props';
import { styles } from './add-certificate.styles';

export const AddCertificateScreen: React.FunctionComponent<AddCertificateScreenProps> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();
  const saveCertificate = useAddCertificateSuccessCallback(dispatch);

  const certificate = useMemo(() => route.params.certificate, [route.params]);
  const issuer = useMemo(() => route.params.issuer, [route.params]);

  const onYesPress = useCallback(() => {
    saveCertificate(certificate, issuer);
    navigation.goBack();
  }, [saveCertificate, certificate, issuer, navigation]);

  const onNoPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // TODO: UI
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Would you like to add this certificate?</Text>
      <TouchableOpacity onPress={onYesPress}>
        <Text style={styles.label}>CONFIRM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNoPress}>
        <Text style={styles.label}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};
