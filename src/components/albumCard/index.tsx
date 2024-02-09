import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import albumStyle from './style';

export const AlbumCard = ({
  title = 'N/A',
  onPressAlbum,
}: {
  title: string;
  onPressAlbum: () => void;
}): JSX.Element => {
  return (
    <View style={albumStyle.container}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onPressAlbum}>
        <Image source={require('../../assets/remove_ic.png')} />
      </TouchableOpacity>
    </View>
  );
};
