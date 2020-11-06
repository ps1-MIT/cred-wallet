import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './issuers-list.styles';
import { IssuersListProps } from './issuers-list.props';

export const IssuersList: React.FunctionComponent<IssuersListProps> = ({
  data,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => null}
      style={styles.container}
    />
  );
};
