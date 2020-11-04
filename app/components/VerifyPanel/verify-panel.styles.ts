import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface VerifyPanelStyles {
  container: ViewStyle;
  panelHeaderContainer: ViewStyle;
  panelHeaderTitle: TextStyle;
  panelHeaderAnimatedDotsContainer: ViewStyle;
  listContainer: ViewStyle;
  listContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<VerifyPanelStyles>({
  container: {
    flex: 1,
  },
  panelHeaderContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  panelHeaderTitle: {
    fontSize: 24,
  },
  panelHeaderAnimatedDotsContainer: {},
  listContainer: {
    flex: 1,
    flexGrow: 3,
  },
  listContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

interface CipherRowStyles {
  container: ViewStyle;
  cipherContainer: ViewStyle;
  cipherText: TextStyle;
}

export const cipherRowStyles = StyleSheet.create<CipherRowStyles>({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  cipherContainer: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cipherText: {
    textAlign: 'center',
    fontSize: 36,
  },
});
