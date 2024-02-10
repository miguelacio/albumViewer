import React from 'react';
import {Image, Text, View} from 'react-native';
import emptyStyles from './style';

export const Empty = () => {
  return (
    <View style={emptyStyles.container}>
      <Image source={require('../../assets/sad_dog_il.png')} />
      <Text style={emptyStyles.label}>
        Something went wrong or there aren't any information to display
      </Text>
    </View>
  );
};
