import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface HomeScreenStyles {
  root: ViewStyle;
  flexContainer: ViewStyle;
  description: TextStyle;
  listContainer: ViewStyle;
  stubContainer: ViewStyle;
}

export const styles = StyleSheet.create<HomeScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  flexContainer: {
    flex: 1,
  },
  description: {
    marginTop: 15,
  },
  listContainer: {
    flex: 1,

    padding: 20,
  },
  stubContainer: {
    flex: 1,
    height: 150,
    borderRadius: 14,
    margin: 10,
  },
});
