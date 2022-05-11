import React from 'react';

// import { Home } from './src/screens/Home';
// import { CarDetails } from './src/screens/CarDetails';
// import { Scheduling } from './src/screens/Scheduling';
// import { SchedulingDetails } from './src/screens/SchedulingDetails';
import { SchedulingComplete } from './src/screens/SchedulingComplete';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={ theme }>
      {/* <Home /> */}
      {/* <CarDetails /> */}
      {/* <SchedulingDetails /> */}
      <SchedulingComplete />
    </ThemeProvider>
  );
}