import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import albumStyles from './style';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchPhotos} from './thunks';
import {PhotoItem} from '../../components/photo';

export const AlbumDetail = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.album.photos);
  console.log('------photos');
  console.log('----', photos);
  console.log('------photos');

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <SafeAreaView style={albumStyles.container}>
      <FlatList
        data={photos}
        numColumns={3}
        renderItem={({item}) => <PhotoItem photo={item} />}
        keyExtractor={(item, index) => `${item.id}${index}`}
      />
    </SafeAreaView>
  );
};
