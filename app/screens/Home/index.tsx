import React, { FunctionComponent } from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';

import { useUserAccount } from '../../redux/user';
import { Text } from '../../components';
import { HomeScreenProps } from './home.props';
import { styles } from './home.styles';
import { STUB_BACKGROUNDS } from './home.dummy';

export const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  navigation,
}) => {
  const user = useUserAccount();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        <Text preset="title">IvorySoft</Text>
        <TouchableOpacity onPress={() => navigation.navigate('QRScanner')}>
          <Text preset="default">ReactNative Boilerplate</Text>
        </TouchableOpacity>
        {/* TODO: remove this FlatList */}
        <FlatList
          data={STUB_BACKGROUNDS}
          renderItem={({ item: backgroundColor }) => (
            <View style={[styles.stubContainer, { backgroundColor }]} />
          )}
          numColumns={2}
          keyExtractor={(item, index) => `stub-container-${item}-${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};
