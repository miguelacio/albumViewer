import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, SectionList} from 'react-native';
import {AlbumCard} from '../../components/albumCard';
import userStyles from './style';
import {UserCard} from '../../components/userCard';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {fetchUsers} from './thunks';
import {deleteAlbum, selectAlbum} from './reducer';
import {mapUserToSectionList} from '../../utils/mapUserToSectionList';
import {Separator} from '../../components/separator';
import {Empty} from '../../components/emptyComponent';

export const Users = ({navigation}: {navigation: any}): JSX.Element => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.users.users);
  const isLoading = useAppSelector(state => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderItem = ({
    item,
  }: {
    item: {userId: number; id: number; title: string};
  }) => {
    return (
      <AlbumCard
        title={item.title}
        onPressAlbum={() => {
          dispatch(selectAlbum(item));
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
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <SectionList
          sections={mapUserToSectionList(users)}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          horizontal={false}
          SectionSeparatorComponent={Separator}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={Empty}
        />
      )}
    </SafeAreaView>
  );
};
