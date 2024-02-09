import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {Navigator} from './src/screens/navigator/root';

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
