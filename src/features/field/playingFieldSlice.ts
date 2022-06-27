import { createSlice } from '@reduxjs/toolkit';
import { playingFieldList } from 'config/playingField.config';
import { Sector } from 'core/Sector/Sector.interface';

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
        setOwnerForSector: (state, { payload }) => {
            const sector = state.sectorList.find(sector => sector.id === payload.sectorId);

            if (sector && sector.owner !== undefined) {
                sector.owner = payload.playerId;
            }
        },
        setFreeSector: (state, { payload }) => {
            const sector = state.sectorList.find(sector => sector.id === payload.sectorId);

            if (sector) sector.owner = null;
        },
    },
});

export const {
    setTargetSector,
    setDice,
    setOwnerForSector,
    setFreeSector,
} = playingFieldSlice.actions;

export default playingFieldSlice.reducer;
