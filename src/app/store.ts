import { configureStore } from '@reduxjs/toolkit';
import matchReducer from '../features/match/matchSlice';
import fieldReducer from '../features/field/playingFieldSlice';
import playersReducer from '../features/players/playersSlice';

export const store = configureStore({
	reducer: {
		match: matchReducer,
        field: fieldReducer,
        players: playersReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
