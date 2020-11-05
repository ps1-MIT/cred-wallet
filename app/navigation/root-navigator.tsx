import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { PinScreen } from '../screens';
import { MainTabNavigator } from './main-tab-navigator';
import { WITHOUT_HEADER_OPTIONS } from './options';
import { navigationRef } from '../services/navigator';

export type RootParams = {
  Pin: { isPushed: boolean };
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen
        name="Pin"
        component={PinScreen}
        options={WITHOUT_HEADER_OPTIONS}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={WITHOUT_HEADER_OPTIONS}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
