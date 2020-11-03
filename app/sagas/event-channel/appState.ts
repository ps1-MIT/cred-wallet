import { AppState, AppStateStatus } from 'react-native';
import { eventChannel } from 'redux-saga';
import { take, call, cancelled } from 'redux-saga/effects';

function createAppStateChannel() {
  return eventChannel((emit: (nextState: AppStateStatus) => void) => {
    AppState.addEventListener('change', emit);
    return () => {
      AppState.removeEventListener('change', emit);
    };
  });
}

export function* appStateListenerSaga(): Generator<any, any, any> {
  const appStateChannel = yield call(createAppStateChannel);
  try {
    while (true) {
      const nextAppState: AppStateStatus = yield take(appStateChannel);
      if (nextAppState === 'active') {
        console.log('The app is active!');
        // Do something, like syncing with server
      }
    }
  } finally {
    if (yield cancelled()) {
      appStateChannel.close();
    }
  }
}
