import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
import { changePlayerLocation } from "../players/playersSlice";
interface PlayingFieldState {
    sectorList: Sector[];
    targetSector: {
        id: number;
    },
    dice: [number | null, number | null]
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
    targetSector: {
        id: 0,
    },
    dice: [null, null],
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {
        setTargetSector: (state, { payload }) => {
            state.targetSector.id = payload;
        },
        setDice: (state, { payload }) => {
            state.dice = payload;
        },
    },
});

export const {
    setTargetSector,
    setDice,
} = playingFieldSlice.actions;

export const selectTopLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Top');
};
export const selectBottomLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Bottom');
};
export const selectTargetSectorId = (state: RootState) => {
    return state.field.targetSector.id;
};
export const takeStepOnField = (payload: [number, number]) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setDice(payload));

    const { list } = getState().players;
    const player = list.find(({ id }) => id === 0);
    const locationId = player ? player.location.id : 0;
    const [d1Value, d2Value] = payload;
    const targetSectorId = locationId + d1Value + d2Value;
    
    dispatch(setTargetSector(targetSectorId));
    dispatch(changePlayerLocation({ playerId: player?.id, locationId: targetSectorId }));

};

export default playingFieldSlice.reducer;
