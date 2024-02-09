import React, {useEffect} from 'react';
import {SafeAreaView, SectionList} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import albumStyles from './style';
import {UserCard} from '../../components/userCard';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './thunks';

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
    item: {userId: string; id: string; title: string};
  }) => {
    return (
      <AlbumCard
        title={item.title}
        onPressAlbum={() => navigation.navigate('Details')}
      />
    );
  };

  const renderHeader = ({section}: {section: {title: string}}) => (
    <UserCard userName={section.title} />
  );

  return (
    <SafeAreaView style={albumStyles.container}>
      <SectionList
        sections={mapUserToSectionList(users)}
        keyExtractor={({id}, index) => id + index}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        horizontal={false}
        SectionSeparatorComponent={Separator}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};
