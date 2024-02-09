import React from 'react';
import {Text, View} from 'react-native';
import albumStyle from './style';

export const UserCard = ({
  userName = 'N/A',
}: {
  userName: string;
}): JSX.Element => {
  return (
    <View style={albumStyle.container}>
      <Text style={albumStyle.textStyle}>{userName}</Text>
    </View>
  );
};
