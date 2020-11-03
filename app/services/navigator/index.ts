import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { Action } from 'redux';

export const navigationRef = React.createRef<NavigationContainerRef>();

export class StaticNavigator {
  static dispatch(action: Action) {
    if (navigationRef?.current) {
      navigationRef.current.dispatch(action);
    }
  }

  static navigateTo(routeName: string, params?: any) {
    console.log('navigateTo', routeName);
    console.log(navigationRef.current);
    if (navigationRef?.current) {
      console.log('navigating...');
      navigationRef.current.navigate(routeName, params);
    }
  }
}
