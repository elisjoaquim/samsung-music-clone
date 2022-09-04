import React, { useLayoutEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import Player from './screens/Player';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useLayoutEffect(() => {
    (async () => {
      await NavigationBar.setPositionAsync('absolute');
      await NavigationBar.setBackgroundColorAsync('#ffffff00');
    })();
  });
  return (
    <SafeAreaProvider>
      <Player />
    </SafeAreaProvider>
  );
};

export default App;
