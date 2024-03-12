import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from '../features/field/playingFieldSlice';
import playersReducer from '../features/players/playersSlice';

export const store = configureStore({
  reducer: {
    field: fieldReducer,
    players: playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
