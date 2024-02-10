import {createSlice} from '@reduxjs/toolkit';
import {Photo} from '../../app/types';
import {fetchPhotos, fetchAllPhotos} from './thunks';

interface AlbumState {
  photos: Photo[];
  isLoading: boolean;
  error: any;
  isAllPhotos: boolean;
}

const initialState: AlbumState = {
  photos: [],
  isLoading: true,
  error: null,
  isAllPhotos: false,
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAllPhotos: state => {
      state.isAllPhotos = !state.isAllPhotos;
    },
    deletePhotos: state => {
      state.photos = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.photos = action.payload as any;
        state.isLoading = false;
      })
      .addCase(fetchPhotos.rejected, state => {
        state.error = 'Something went horribly Wrong';
        state.isLoading = false;
      })
      .addCase(fetchPhotos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllPhotos.fulfilled, (state, action) => {
        state.photos = action.payload as any;
        state.isLoading = false;
      })
      .addCase(fetchAllPhotos.rejected, state => {
        state.error = 'Something went horribly Wrong';
        state.isLoading = false;
      })
      .addCase(fetchAllPhotos.pending, state => {
        state.isLoading = true;
      });
  },
});

export const {setAllPhotos, deletePhotos} = albumSlice.actions;

export default albumSlice.reducer;
