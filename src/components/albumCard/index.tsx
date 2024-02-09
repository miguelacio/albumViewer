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
      <Text style={albumStyle.albumName}>{title}</Text>
      <TouchableOpacity onPress={onPressAlbum} style={albumStyle.touchable}>
        <Image source={require('../../assets/remove_ic.png')} />
      </TouchableOpacity>
    </View>
  );
};
