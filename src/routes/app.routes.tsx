import React from 'react';
import { Platform } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Home } from '../screens/Home';
import { RegisterLoginData } from '../screens/RegisterLoginData';

const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.secondary,
        labelPosition: 'beside-icon',
        labelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: RFValue(14),
          marginLeft: RFValue(14)
        },
        style: {
          paddingVertical: Platform.select({ ios: 20, android: 0 })
        }
      }}
    >
      <Screen
        name="Home"
        options={{
          tabBarLabel: 'Senhas',
          tabBarIcon: (({ color }) => (
            <FeatherIcon
              name="key"
              color={color}
              size={24}
            />
          )),
        }}
        component={Home}
      />
      
      <Screen
        name="RegisterLoginData"
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: (({ color }) => (
            <FeatherIcon
              name="edit"
              color={color}
              size={24}
            />
          )),
        }}
        component={RegisterLoginData}
      />
    </Navigator>
  );
}
