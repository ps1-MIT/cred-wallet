
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, SettingsStackNavigator } from './stacks';

export type MainTabParams = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParams>();

export const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Settings" component={SettingsStackNavigator} />
  </Tab.Navigator>
);
