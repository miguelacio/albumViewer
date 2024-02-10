import React from 'react';
import {Image} from 'react-native';
import imageStyles from './style';
import {Photo} from '../../app/types';

export const PhotoItem = ({photo}: {photo: Photo}): JSX.Element => {
  console.log('------photo');
  console.log('----', photo);
  console.log('------photo');
  return (
    <Image
      style={imageStyles.image}
      source={{
        uri: photo.thumbnailUrl,
      }}
    />
  );
};
