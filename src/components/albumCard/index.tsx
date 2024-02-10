import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import albumStyle from './style';

export const AlbumCard = ({
  title = 'N/A',
  onPressAlbum,
  onDeleteAlbum,
}: {
  title: string;
  onPressAlbum: () => void;
  onDeleteAlbum: () => void;
}): JSX.Element => {
  return (
    <View style={albumStyle.container}>
      <TouchableOpacity style={albumStyle.nameTouchable} onPress={onPressAlbum}>
        <Text style={albumStyle.albumName}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDeleteAlbum}
        style={albumStyle.deleteTouchable}>
        <Image source={require('../../assets/remove_ic.png')} />
      </TouchableOpacity>
    </View>
  );
};
