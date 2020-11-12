import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface AddCertificateScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<AddCertificateScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_TRANSPARENT_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
