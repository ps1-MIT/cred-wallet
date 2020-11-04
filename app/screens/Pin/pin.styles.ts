import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface PinScreenStyles {
  root: ViewStyle;
}

export const styles = StyleSheet.create<PinScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
