import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { RootParams } from '../../navigation/root-navigator';

type NavigationProps = StackNavigationProp<RootParams, 'Initial'>;
type RouteProps = StackScreenProps<RootParams, 'Initial'>;

export interface InitialScreenProps extends NavigationProps, RouteProps {}
