import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumDetail} from '../AlbumDetail';
import {Users} from '../Users';
import {useAppSelector, useAppDispatch} from '../../app/hooks';

import {StarButton} from '../../components/starButton';
import {setAllPhotos} from '../AlbumDetail/reducer';
import {fetchAllPhotos, fetchPhotos} from '../AlbumDetail/thunks';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const selectedAlbum = useAppSelector(state => state.users.selectedAlbum);
  const isAllPhotos = useAppSelector(state => state.album.isAllPhotos);
  const dispatch = useAppDispatch();

  const handleOnPressStar = () => {
    if (!isAllPhotos) {
      dispatch(fetchAllPhotos());
    } else {
      dispatch(fetchPhotos());
    }
    dispatch(setAllPhotos());
  };
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
          title: isAllPhotos ? 'All Photos' : selectedAlbum?.title,
          headerStyle: {
            backgroundColor: '#274029',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <StarButton
              onPressStar={handleOnPressStar}
              selected={isAllPhotos}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

type RootStackParamList = {
  Users: undefined;
  Details: undefined;
};
