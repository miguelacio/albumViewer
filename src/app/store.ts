import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import usersReducer from '../screens/Users/reducer';
import albumReducer from '../screens/AlbumDetail/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    album: albumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
