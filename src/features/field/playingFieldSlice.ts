import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
interface PlayingFieldState {
    sectorList: Sector[];
    sectorCoordinates: {
        x: number | null;
        y: number | null;
    }
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
    sectorCoordinates: {
        x: null,
        y: null,
    },
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {
        setTargetSector: (state, { payload }) => {
            const sector = state.sectorList.find(({ id }) => payload === id);
            if (sector) {
                sector.target = true;
            } 
        },
        setTargetCoordinates: (state, { payload }) => {
            state.sectorCoordinates = payload;
        },
    },
});

export const {
    setTargetSector,
    setTargetCoordinates,
} = playingFieldSlice.actions;

export const selectTopLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Top');
};
export const selectBottomLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Bottom');
};

export default playingFieldSlice.reducer;
