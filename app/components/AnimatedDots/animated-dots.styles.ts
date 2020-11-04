import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';

interface AnimatedDotsStyles {
  container: ViewStyle;
  dotContainer: ViewStyle;
  activeDotContainer: ViewStyle;
}

export const styles = StyleSheet.create<AnimatedDotsStyles>({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  dotContainer: {
    width: 10,
    height: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
  },
  activeDotContainer: {
    backgroundColor: COLORS.BLACK,
  },
});
