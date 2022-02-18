import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
interface PlayingFieldState {
    sectorList: Sector[];
    targetSector: {
        id: number;
    } 
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
    targetSector: {
        id: 0,
    },
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {
        setTargetSector: (state, { payload }) => {
            state.targetSector.id = payload;
        },
    },
});

export const {
    setTargetSector,
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

export default playingFieldSlice.reducer;
