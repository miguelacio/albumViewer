import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import albumStyles from './style';

export const AlbumDetail = ({navigation}: {navigation: any}): JSX.Element => {
  return (
    <SafeAreaView style={albumStyles.container}>
      <Text>AlbumDetail Screen</Text>
    </SafeAreaView>
  );
};
