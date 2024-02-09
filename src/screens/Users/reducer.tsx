import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../app/types';

// Define a type for the slice state
interface UserState {
  users: User[];
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const {setUsers} = userSlice.actions;

export default userSlice.reducer;
