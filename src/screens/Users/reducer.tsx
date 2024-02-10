import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserWithAlbum} from '../../app/types';
import {fetchUsers} from './thunks';
// Define a type for the User state
interface UserState {
  users: UserWithAlbum[];
  isLoading: boolean;
  error: any;
  selectedAlbum: number;
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  isLoading: true,
  error: null,
  selectedAlbum: -1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteAlbum: (state, action: PayloadAction<number>) => {
      const tmpArray = state.users;
      const objWithIdIndex = tmpArray.findIndex(
        obj => obj.id === action.payload,
      );

      if (objWithIdIndex > -1) {
        tmpArray.splice(objWithIdIndex, 1);
      }
      state.users = tmpArray;
    },
    selectAlbum: (state, action: PayloadAction<number>) => {
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
