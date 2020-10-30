import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

export const reactotron = Reactotron.configure() //
  .useReactNative().setAsyncStorageHandler!(AsyncStorage)
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .connect();

reactotron.clear!();
