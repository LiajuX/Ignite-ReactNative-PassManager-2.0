import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import { StorageProvider } from './src/hooks/storage';

import { AppRoutes } from './src/routes/app.routes';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StorageProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </StorageProvider>

      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}