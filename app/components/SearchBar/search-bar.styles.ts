import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface SearchBarStyles {
  container: ViewStyle;
  input: TextStyle;
}

export const styles: SearchBarStyles = StyleSheet.create<SearchBarStyles>({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 100,
    backgroundColor: COLORS.ALABASTER,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
