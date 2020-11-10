import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAddCertificateCallback } from '../../redux/certificates';
import { ICertificateDeeplinkWithDID } from '../../utils/types';

import { AddCertificateScreenProps } from './add-certificate.props';
import { styles } from './add-certificate.styles';

export const AddCertificateScreen: React.FunctionComponent<AddCertificateScreenProps> = () => {
  const dispatch = useDispatch();
  const addCertificate = useAddCertificateCallback(dispatch);

  useEffect(() => {
    const dummyObj: ICertificateDeeplinkWithDID = {
      did: '',
      challenge: '',
      requestUrl: '',
    };

    addCertificate(dummyObj);
  }, []);

  return <View style={styles.root} />;
};
