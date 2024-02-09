import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumDetail} from '../AlbumDetail';
import {Users} from '../Users';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={Users} />
      <Stack.Screen name="Home" component={AlbumDetail} />
    </Stack.Navigator>
  );
};
