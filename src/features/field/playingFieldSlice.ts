import { createSlice, PayloadAction, EntityState } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from '../../app/store';
import { playingFieldList } from "../../config/playingField.config";
import { Sector } from "../../core/Sector/Sector.interface";
import { BuySectorData } from '../../models/BuySectorData.interface';
import {
    changePlayerLocation,
    decreasePlayersCashCount,
    increasePlayersPropertyCount
} from "../players/playersSlice";
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
    },
});

export const {
    setTargetSector,
    setDice,
    setOwnerForSector,
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
export const selectTargetSector = (state: RootState) => {
    return state.field.sectorList.find(({ id }) => id === state.field.targetSector.id)
        || state.field.sectorList[0];
};
export const takeStepOnField = (payload: {dice: [number, number], playerId: number}) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setDice(payload.dice));

    const { list } = getState().players;
    const player = list.find(({ id }) => id === payload.playerId);
    const locationId = player ? player.location.id : 0;
    const [d1Value, d2Value] = payload.dice;
    const result = locationId + d1Value + d2Value;
    let targetSectorId: number;

    if (result > 39) {
        const diff = result - 40;
        targetSectorId = diff;
    } else {
        targetSectorId = result;
    }
    
    dispatch(setTargetSector(targetSectorId));
    dispatch(changePlayerLocation({
        playerId: player?.id,
        locationId: targetSectorId
    }));
};
export const buySector = (payload: BuySectorData) => (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(({ id }) => id === payload.sectorId);
    if (sector) {
        dispatch(decreasePlayersCashCount({
            count: sector?.price,
            playerId: payload.playerId
        }));
        dispatch(setOwnerForSector(payload));
        dispatch(increasePlayersPropertyCount({
            count: sector.price ? sector.price / 2 : 0,
            playerId: payload.playerId,
        }))
    }
}

export default playingFieldSlice.reducer;
