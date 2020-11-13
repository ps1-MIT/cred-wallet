import React, { useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { IMAGES } from '../../assets';

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

  return (
    <View style={styles.container}>
      <View style={styles.requestContainer}>
        <Text style={styles.requestTitle}>Do you want to add?</Text>
        <View style={styles.certificateInfoContainer}>
          <Text style={styles.certificateInfoTitle}>
            Certificate of completion of courses in {issuer.name}
          </Text>

          <View style={styles.certificateInfoPhotoArea}>
            <View style={styles.certificateInfoPhotoContainer}>
              <Image style={styles.certificateInfoPhoto} source={IMAGES.MAN} />
            </View>

            <View style={styles.certificateInfoFieldsContainer}>
              <View style={styles.certificateInfoFieldContainer}>
                <Text style={styles.certificateInfoFieldName}>Course:</Text>
                <Text style={styles.certificateInfoFieldValue}>software</Text>
              </View>
              <View style={styles.certificateInfoFieldContainer}>
                <Text style={styles.certificateInfoFieldName}>Level:</Text>
                <Text style={styles.certificateInfoFieldValue}>
                  super high level
                </Text>
              </View>
              <View style={styles.certificateInfoFieldContainer}>
                <Text style={styles.certificateInfoFieldName}>Date:</Text>
                <Text style={styles.certificateInfoFieldValue}>
                  02/01/20 - 02/04/20
                </Text>
              </View>
              <View style={styles.certificateInfoFieldContainer}>
                <Text style={styles.certificateInfoFieldName}>Number:</Text>
                <Text style={styles.certificateInfoFieldValue}>345346</Text>
              </View>
            </View>
          </View>

          <View style={styles.certificateInfoSeparator} />

          <View style={styles.certificateInfoUsernameRow}>
            <Text style={styles.certificateInfoUsername}>
              {certificate.credentialSubject?.name}
            </Text>

            <Image
              style={styles.certificateInfoSignIcon}
              source={IMAGES.SIGNATURE}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.noButtonContainer}
            onPress={onNoPress}
          >
            <Text style={styles.noButtonText}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.yesButtonContainer}
            onPress={onYesPress}
          >
            <Text style={styles.yesButtonText}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
