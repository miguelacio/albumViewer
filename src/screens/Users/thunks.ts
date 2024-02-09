// First, create the thunk
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Album, User} from '../../app/types';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users/';
const URL_SUFFIX = '/albums';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const {data} = await axios.get<User[]>(URL_USERS);

    const usersWithAlbums = [];

    for (const user of data) {
      const URL_ALBUMS_BY_USER = `${URL_USERS}${user.id}${URL_SUFFIX}`;

      const {data: albums} = await axios.get<Album[]>(URL_ALBUMS_BY_USER);

      usersWithAlbums.push({...user, albums});
    }

    return usersWithAlbums;
  } catch (e) {
    console.log('------e');
    console.log('----', e);
    console.log('------e');
    return [];
  }
});
