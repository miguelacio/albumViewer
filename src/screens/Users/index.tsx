import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import albumStyles from './style';
import {UserCard} from '../../components/userCard/indext';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './thunks';

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <SafeAreaView style={albumStyles.container}>
      <Text>Albums Screen Screen</Text>
      <UserCard userName="example" />
      <AlbumCard title="example" onPressAlbum={() => {}} />
    </SafeAreaView>
  );
};
