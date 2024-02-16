import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Album, UserWithAlbum} from '../../app/types';
import {fetchUsers} from './thunks';
// Define a type for the User state
export interface UserState {
  users: UserWithAlbum[];
  isLoading: boolean;
  error: any;
  selectedAlbum: Album | null;
}

// Define the initial state using that type
export const initialState: UserState = {
  users: [],
  isLoading: true,
  error: null,
  selectedAlbum: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAlbum: (state, action: PayloadAction<Album>) => {
      const tmpUsersArray = state.users;
      const userId = tmpUsersArray.findIndex(
        obj => obj.id === action.payload.userId,
      );

      const userToDeleteAlbum = tmpUsersArray[userId];

      const albumId = userToDeleteAlbum.albums.findIndex(
        obj => obj.id === action.payload.id,
      );

      if (albumId > -1) {
        userToDeleteAlbum.albums.splice(albumId, 1);
      }

      const result = tmpUsersArray.map(item =>
        item.id === userToDeleteAlbum.id ? userToDeleteAlbum : item,
      );

      state.users = result;
    },
    selectAlbum: (state, action: PayloadAction<Album>) => {
      state.selectedAlbum = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload as any;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.error = 'Something went horribly Wrong';
        state.isLoading = false;
      });
  },
});

export const {deleteAlbum, selectAlbum} = userSlice.actions;

export default userSlice.reducer;
