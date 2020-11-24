import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface HomeScreenStyles {
  root: ViewStyle;
  flexContainer: ViewStyle;
  description: TextStyle;
  listContainer: ViewStyle;
  addCertificateButtonContainer: ViewStyle;
  // TODO: remove it
  addCertificateButtonText: TextStyle;
  issuerContainer: ViewStyle;
  issuerImage: ImageStyle;
  issuerTitle: TextStyle;
  issuerCertificates: TextStyle;
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
  addCertificateButtonContainer: {
    backgroundColor: COLORS.BAY_OF_MANY,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    right: 16,
    bottom: 18,
  },
  // TODO: replace plus by Icon
  addCertificateButtonText: {
    marginTop: -8,
    fontSize: 64,
    fontWeight: '500',
    color: COLORS.WHITE,
  },

  issuerContainer: {
    flex: 1,
    height: 150,
    borderRadius: 14,
    margin: 10,
    // TODO: replace color by constant
    backgroundColor: 'rgba(77, 87, 140, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  issuerImage: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  issuerTitle: {
    // TODO: fontFamily
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.5,
  },
  issuerCertificates: {
    // TODO: fontFamily
    fontSize: 11,
    lineHeight: 13,
    marginBottom: 10,
  },
});
