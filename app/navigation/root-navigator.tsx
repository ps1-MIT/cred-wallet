import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { InitialScreen } from '../screens';
import { MainTabNavigator } from './main-tab-navigator';
import { WITHOUT_HEADER_OPTIONS } from './options';

export type RootParams = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={WITHOUT_HEADER_OPTIONS}
      />
      <Stack.Screen
        name="Home"
        component={MainTabNavigator}
        options={WITHOUT_HEADER_OPTIONS}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
