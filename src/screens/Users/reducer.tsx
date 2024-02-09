import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserWithAlbum} from '../../app/types';
import {fetchUsers} from './thunks';
// Define a type for the User state
interface UserState {
  users: UserWithAlbum[];
  isLoading: boolean;
  error: any;
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  isLoading: true,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAlbum: (state, action: PayloadAction) => {
      state.users = [];
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

export const {deleteAlbum} = userSlice.actions;

export default userSlice.reducer;
