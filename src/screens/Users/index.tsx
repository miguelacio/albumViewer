import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import albumStyles from './style';
import {UserCard} from '../../components/userCard/indext';

export const Users = () => {
  return (
    <SafeAreaView style={albumStyles.container}>
      <Text>Albums Screen Screen</Text>
      <UserCard />
      <AlbumCard />
    </SafeAreaView>
  );
};
