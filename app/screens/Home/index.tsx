import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import _ from 'lodash';

import { SearchBar, Text } from '../../components';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';
import { useIssuerCertificates } from '../../redux/certificates';
import { IMAGES } from '../../assets';

const ANIMATION_DURATION = 250;

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
}) => {
  /* ------ State ------ */

  const issuers = useIssuerCertificates();
  const extendedListOpacity = useRef(new Animated.Value(1));

  const [searchValue, setSearchValue] = useState<string>('');
  const [isExtendedList, setIsExtendedList] = useState<boolean>(true);

  /* ------ Callbacks ------ */

  const startExtendedListAnimation = useCallback(
    (toValue: number, callback: () => void = _.noop) => {
      Animated.timing(extendedListOpacity.current, {
        toValue,
        easing: Easing.linear,
        duration: ANIMATION_DURATION,
        useNativeDriver: false,
      }).start(callback);
    },
    [extendedListOpacity],
  );

  const onSearchFocus = useCallback(() => {
    startExtendedListAnimation(0, () => setIsExtendedList(false));
  }, [setIsExtendedList, startExtendedListAnimation]);

  const onSearchBlur = useCallback(() => {
    setIsExtendedList(true);
    startExtendedListAnimation(1);
  }, [startExtendedListAnimation]);

  // TODO: move this callbacks to components
  const renderExtendedList = useCallback(() => {
    // TODO: change this FlatList with real data
    return (
      <Animated.View
        style={[styles.flexContainer, { opacity: extendedListOpacity.current }]}
      >
        <FlatList
          data={Object.values(issuers)}
          renderItem={({ item }) => (
            <View style={styles.issuerContainer}>
              <Image style={styles.issuerImage} source={IMAGES.GRADUATION} />
              <Text style={styles.issuerTitle}>{item.issuer.name}</Text>
              <Text style={styles.issuerCertificates}>
                {item.certificates.length} certificates
              </Text>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => `stub-container-${item}-${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
      </Animated.View>
    );
  }, [issuers, extendedListOpacity.current]);

  // TODO: move this callback to components
  const renderShortList = useCallback(() => {
    return (
      <View>
        <Text>EMPTY SECTION</Text>
      </View>
    );
  }, []);

  const renderCurrentList = useCallback(
    () => (isExtendedList ? renderExtendedList() : renderShortList()),
    [isExtendedList, renderExtendedList, renderShortList],
  );

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <View style={styles.flexContainer}>
        <SearchBar
          value={searchValue}
          onChangeText={setSearchValue}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
        />
        {renderCurrentList()}
        <TouchableOpacity
          style={styles.addCertificateButtonContainer}
          onPress={() => navigation.navigate('QRScanner')}
        >
          <Text style={styles.addCertificateButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
