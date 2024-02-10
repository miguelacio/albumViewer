import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import starButtonStyle from './style';

export const StarButton = ({
  onPressStar,
  selected,
}: {
  selected: boolean;
  onPressStar: () => void;
}) => {
  return (
    <TouchableOpacity style={starButtonStyle.container} onPress={onPressStar}>
      <Image
        source={
          selected
            ? require('../../assets/star_filled_ic.png')
            : require('../../assets/star_outline_ic.png')
        }
      />
    </TouchableOpacity>
  );
};
