import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
interface PlayingFieldState {
    sectorList: Sector[];
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {},
});

export const selectTopLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Top');
};
export const selectBottomLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Bottom');
};

export default playingFieldSlice.reducer;
