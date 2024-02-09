import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../app/types';

// Define a type for the User state
interface UserState {
  users: User[];
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
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    setUsersError: state => {
      state.error = 'Something went horribly wrong';
      state.isLoading = false;
    },
  },
});

export const {setUsers, setUsersError} = userSlice.actions;

export default userSlice.reducer;
