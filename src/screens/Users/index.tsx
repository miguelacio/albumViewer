import React, {useEffect} from 'react';
import {SafeAreaView, SectionList} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import userStyles from './style';
import {UserCard} from '../../components/userCard';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './thunks';
import {deleteAlbum, selectAlbum} from './reducer';

import {mapUserToSectionList} from '../../utils/mapUserToSectionList';
import {Separator} from '../../components/separator';

export const Users = ({navigation}: {navigation: any}): JSX.Element => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderItem = ({
    item,
  }: {
    item: {userId: string; id: number; title: string};
  }) => {
    return (
      <AlbumCard
        title={item.title}
        onPressAlbum={() => {
          dispatch(selectAlbum(item.id));
          navigation.navigate('Details');
        }}
        onDeleteAlbum={() => {
          dispatch(deleteAlbum(item.id));
        }}
      />
    );
  };

  const renderHeader = ({section}: {section: {title: string}}) => (
    <UserCard userName={section.title} />
  );

  return (
    <SafeAreaView style={userStyles.container}>
      <SectionList
        sections={mapUserToSectionList(users)}
        keyExtractor={(item, index) => {
          return `${item.id}${index}`;
        }}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        horizontal={false}
        SectionSeparatorComponent={Separator}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};
