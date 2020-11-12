import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface AddCertificateScreenStyles {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<AddCertificateScreenStyles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_TRANSPARENT_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
