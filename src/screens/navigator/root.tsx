import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumDetail} from '../AlbumDetail';
import {Users} from '../Users';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          title: 'Users',
          headerStyle: {
            backgroundColor: '#274029',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Details" component={AlbumDetail} />
    </Stack.Navigator>
  );
};

type RootStackParamList = {
  Users: undefined;
  Details: undefined;
};
