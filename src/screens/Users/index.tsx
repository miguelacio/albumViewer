import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import albumStyles from './style';
import {UserCard} from '../../components/userCard/indext';
import {useAppSelector, useAppDispatch} from '../../app/hooks';

export const Users = () => {
  const users = useAppSelector(state => state.users.users);

  return (
    <SafeAreaView style={albumStyles.container}>
      <Text>Albums Screen Screen</Text>
      <UserCard userName="example" />
      <AlbumCard title="example" onPressAlbum={() => {}} />
    </SafeAreaView>
  );
};
