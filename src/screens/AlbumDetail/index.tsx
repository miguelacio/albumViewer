import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import albumStyles from './style';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchPhotos} from './thunks';
import {PhotoItem} from '../../components/photo';
import {deletePhotos} from './reducer';

export const AlbumDetail = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.album.photos);
  const isLoading = useAppSelector(state => state.album.isLoading);

  useEffect(() => {
    dispatch(fetchPhotos());

    return () => {
      dispatch(deletePhotos());
    };
  }, [dispatch]);

  return (
    <SafeAreaView style={albumStyles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <FlatList
          data={photos}
          numColumns={3}
          renderItem={({item}) => <PhotoItem photo={item} />}
          keyExtractor={(item, index) => `${item.id}${index}`}
        />
      )}
    </SafeAreaView>
  );
};
