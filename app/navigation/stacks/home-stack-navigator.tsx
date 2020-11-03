import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { HomeScreen } from '../../screens';
import { WITHOUT_HEADER_OPTIONS } from '../options';

export type HomeStackParams = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={WITHOUT_HEADER_OPTIONS}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
