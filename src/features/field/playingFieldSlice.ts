import { createSlice } from '@reduxjs/toolkit';
import { playingFieldList } from 'config/playingField.config';
import { Sector } from 'core/Sector/Sector.interface';

interface PlayingFieldState {
    sectorList: Sector[];
    targetSector: {
        id: number;
    },
    previousSector: {
        id: number;
    };
    dice: [number | null, number | null]
}

const initialState: PlayingFieldState = {
    sectorList: playingFieldList,
    targetSector: {
        id: 0,
    },
    previousSector: {
        id: 0,
    },
    dice: [null, null],
};

export const playingFieldSlice = createSlice({
    name: 'playingField',
    initialState,
    reducers: {
        setTargetSector: (state, { payload }) => {
            state.previousSector.id = state.targetSector.id;
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
        setLastUpgradedSector: (state, { payload }) => {
            const sector = state.sectorList.find(sector => sector.id === payload.sectorId);
            const lastUpgradedSector = state.sectorList.find(sector => sector.isLastUpgraded);

            if (lastUpgradedSector) lastUpgradedSector.isLastUpgraded = false;
            if (sector) sector.isLastUpgraded = true;
        },
        setHouseState: (state, { payload }) => {
            const sector = state.sectorList.find(sector => sector.id === payload.sectorId);
            const house = sector?.houseList![payload.houseIndex];

            if (house) house.state = payload.state;
        }
    },
});

export const {
    setTargetSector,
    setDice,
    setOwnerForSector,
    setFreeSector,
    setLastUpgradedSector,
    setHouseState,
} = playingFieldSlice.actions;

export default playingFieldSlice.reducer;
