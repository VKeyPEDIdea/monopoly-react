import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
import { Coordinates } from "../../models/Coordinates.interface";
interface PlayingFieldState {
    sectorList: Sector[];
    targetSector: {
        coordinates: Coordinates;
        id: number;
    } 
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
    targetSector: {
        coordinates: {
            x: null,
            y: null,
        },
        id: 0,
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
            state.targetSector.coordinates = payload;
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
export const selectTargetSectorCoordinates = (state: RootState) => {
    return state.field.targetSector.coordinates;
};
export const selectTargetSectorId = (state: RootState) => {
    return state.field.targetSector.id;
};

export default playingFieldSlice.reducer;
