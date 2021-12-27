import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
interface MatchState {
	bank: number;
	round: number;
	stage: number;
	timer: number | NodeJS.Timeout;
	pause: boolean;
}

const cardPrice = 200;

const initialState: MatchState = {
	bank: 0,
	round: 1,
	stage: 1,
	timer: 0,
	pause: true,
};

export const matchSlice = createSlice({
	name: 'match',
	initialState,
	reducers: {
		startMatch: state => {
			state.pause = false;
		},

		switchPause: state => {
			state.pause = !state.pause;
		},
		setTimer: (state, action: PayloadAction<NodeJS.Timeout>) => {
			state.timer = action.payload;
		},
	}
});

export const {
	startMatch,
	switchPause,
	setTimer,
} = matchSlice.actions;
export const selectMatchBank = (state: RootState) => state.match.bank;
export const selectMatchRound = (state: RootState) => state.match.round;
export const selectMatchStage = (state: RootState) => state.match.stage;
export const selectMatchPause = (state: RootState) => state.match.pause;

export const setBreak = () => (dispatch: AppDispatch, getState: any) => {
	dispatch(switchPause());
	const { pause, timer } = getState().match;
	if (pause) {
		clearTimeout(timer);
	} else {
		dispatch(setTimer(setTimeout(() => dispatch(tick()), 1000)));
	}
};

const tick = function step() {
	return (dispatch: AppDispatch) => {
		dispatch(setTimer(setTimeout(() => dispatch(step()), 1000)));
	}
};

export const initMatch = () => (dispatch: AppDispatch) => {
	dispatch(switchPause());
	dispatch(setTimer(setTimeout(() => dispatch(tick()), 1000)));
};

export default matchSlice.reducer;
