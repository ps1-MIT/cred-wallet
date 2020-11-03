import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { PinScreen } from '../screens';
import { MainTabNavigator } from './main-tab-navigator';
import { WITHOUT_HEADER_OPTIONS } from './options';

export type RootParams = {
  Pin: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer>
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
