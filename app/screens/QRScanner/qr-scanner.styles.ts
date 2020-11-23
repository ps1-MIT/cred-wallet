import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface QRScannerScreenStyles {
  root: ViewStyle;
  cameraContainer: ViewStyle;
  cameraMarkerContiner: ViewStyle;
  goBackZoneContainer: ViewStyle;
  descriptionText: TextStyle;
}

export const styles = StyleSheet.create<QRScannerScreenStyles>({
  root: {
    flex: 1,
    backgroundColor: COLORS.GRAY_TRANSPARENT_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    borderColor: COLORS.BLACK,
    borderWidth: 6,
    alignSelf: 'center',
  },
  goBackZoneContainer: {
    flex: 1,
    width: '100%',
  },
  cameraMarkerContiner: {
    borderColor: 'white',
  },
  descriptionText: {
    marginTop: 32,
    fontSize: 14,
    lineHeight: 17.5,
    fontWeight: '500',
    color: COLORS.WHITE_HALF_OPACITY,
    textAlign: 'center',
  },
});
