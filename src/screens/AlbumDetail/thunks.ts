// First, create the thunk
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {RootState} from '../../app/store';

const URL_PHOTOS = 'https://jsonplaceholder.typicode.com/albums/';
const URL_SUFFIX = '/photos';
const URL_ALL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPhotos = createAsyncThunk(
  'album/fetchPhotos',
  async (_, {getState}) => {
    const state = getState() as RootState;

    try {
      const {data} = await axios.get(
        `${URL_PHOTOS}${state.users.selectedAlbum?.id || 0}${URL_SUFFIX}`,
      );

      return data;
    } catch (e) {
      return [];
    }
  },
);

export const fetchAllPhotos = createAsyncThunk(
  'album/fetchAllPhotos',
  async () => {
    try {
      const {data} = await axios.get(URL_ALL_PHOTOS);

      return data;
    } catch (e) {
      return [];
    }
  },
);
