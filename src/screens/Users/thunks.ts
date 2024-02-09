// First, create the thunk
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Album, User} from '../../app/types';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_ALBUMS_BY_USER_ID =
  'https://jsonplaceholder.typicode.com/albums?userId=';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const {data} = await axios.get<User[]>(URL_USERS);

    const usersWithAlbums = [];

    for (const user of data) {
      const {data: albums} = await axios.get<Album[]>(
        `${URL_ALBUMS_BY_USER_ID}{${user.id}}`,
      );
      usersWithAlbums.push({...user, albums});
    }

    return usersWithAlbums;
  } catch (e) {}
});
