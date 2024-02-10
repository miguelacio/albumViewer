import {createSlice} from '@reduxjs/toolkit';
import {Photo} from '../../app/types';
import {fetchPhotos} from './thunks';

interface AlbumState {
  photos: Photo[];
  isLoading: boolean;
  error: any;
}

const initialState: AlbumState = {
  photos: [],
  isLoading: true,
  error: null,
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos = action.payload as any;
        state.isLoading = false;
      })
      .addCase(fetchPhotos.rejected, state => {
        state.error = 'Something went horribly Wrong';
        state.isLoading = false;
      });
  },
});

export const {} = albumSlice.actions;

export default albumSlice.reducer;
