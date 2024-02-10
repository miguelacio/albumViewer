import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumDetail} from '../AlbumDetail';
import {Users} from '../Users';
import {useAppSelector} from '../../app/hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const selectedAlbum = useAppSelector(state => state.users.selectedAlbum);

  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
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
      <Stack.Screen
        name="Details"
        component={AlbumDetail}
        options={{
          title: selectedAlbum ? selectedAlbum.title : 'All Photos',
          headerStyle: {
            backgroundColor: '#274029',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

type RootStackParamList = {
  Users: undefined;
  Details: undefined;
};
