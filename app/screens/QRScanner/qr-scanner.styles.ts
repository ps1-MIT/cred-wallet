import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface QRScannerScreenStyles {
  root: ViewStyle;
}

export const styles = StyleSheet.create<QRScannerScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
