import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from "../../app/store";
import { Player } from "../../core/Player/Player.interface";
import { Person } from "../../core/Player/Person.model";
import { PlayerChipInfo } from "../../components/PlayerChip/PlayerChipContainer.interface";
import { Coordinates } from "../../models/Coordinates.interface";
import { setTargetSector } from "features/field/playingFieldSlice";

interface PlayersState {
    list: Player[],
    currentPlayerId: number;
}

const testUser = { ...new Person('Реджайна', 7000) };
const testUser2 = { ...new Person('Павел', 5000) };
const testUser3 = { ...new Person('Тихон', 8500) };
const testUser4 = { ...new Person('Максим', 6500) };

const initialState: PlayersState = {
    list: [testUser, testUser2, testUser3, testUser4],
    currentPlayerId: 0,
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        changePlayerLocation: (state, { payload }) => {
            const player = state.list.find(({ id }) => id === payload.playerId);
            if (player) {
                player.location.id = payload.locationId;
            }
        },
        setPlayerCoordinatesByPlayerId: (state, { payload }) => {
            const player = state.list.find(({ id }) => id === payload.playerId);
            if (player) {
                player.location.coordinates = payload.coordinates;
            }
        },
        turnToNextPlayer: state => {
            if (state.currentPlayerId < state.list.length - 1) {
                state.currentPlayerId += 1;
            } else {
                state.currentPlayerId = 0;
            }
        },
        decreasePlayersCashCount: (state, { payload }) => {
            const player = state.list.find(player => player.id === payload.playerId);
            if (player) {
                player.cashCount -= payload.count;
            }
        },
        increasePlayersCashCount: (state, { payload }) => {
            const player = state.list.find(player => player.id === payload.playerId);
            if (player) {
                player.cashCount += payload.count;
            }
        },
        decreasePlayersPropertyCount: (state, { payload }) => {
            const player = state.list.find(player => player.id === payload.playerId);
            if (player) {
                player.propertyCount -= payload.count;
            }
        },
        increasePlayersPropertyCount: (state, { payload }) => {
            const player = state.list.find(player => player.id === payload.playerId);
            if (player) {
                player.propertyCount += payload.count;
            }
        },
    },
});

export const {
    changePlayerLocation,
    setPlayerCoordinatesByPlayerId,
    turnToNextPlayer,
    decreasePlayersCashCount,
    decreasePlayersPropertyCount,
    increasePlayersCashCount,
    increasePlayersPropertyCount,
} = playersSlice.actions;

export const selectPlayers = (state: RootState): Player[] => state.players.list;
export const selectOrderedPlayersList = (state: RootState): Player[] => {
    const orderedList = [...state.players.list];
    return orderedList.sort((plr1, plr2) => {
        return (plr2.cashCount + plr2.propertyCount) - (plr1.cashCount + plr1.propertyCount);
    });
};
export const selectMaxScore = (): number => {
    const orderedPlayersList = useAppSelector(selectOrderedPlayersList);
    const { cashCount, propertyCount } = [...orderedPlayersList][0];
    return cashCount + propertyCount;
};
export const selectPlayersForChips = (state: RootState): PlayerChipInfo[] => {
    return state.players.list.map(({ name, location, id }) => { 
        return {
            name,
            coordinates: location.coordinates,
            id,
        }; 
    });
};
export const selectPlayerLocationId = (state: RootState, playerId: number): number | null => {
    const player = state.players.list.find(({ id }) => playerId === id);
    if (player) {
        return player.location.id;
    }
    return null;
};
export const selectPlayersIdList = (state: RootState): number[] => {
    return state.players.list.map(({ id }) => id);
};
export const selectCurrentPlayerId = (state: RootState): number => {
    return state.players.currentPlayerId;
};
export const selectPlayerByID = (state: RootState, id: number | null) => {
    return state.players.list.find(player => player.id === id)?.name || null;
};
export const moveChipToTargetSector = (payload: { currentPlayerId: number; coordinates: Coordinates}) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(setPlayerCoordinatesByPlayerId({
            playerId: payload.currentPlayerId,
            coordinates: payload.coordinates
        }));
    }, 1000);
};

export const passTheQueue = () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(turnToNextPlayer());
    const currentPlayerId = getState().players.currentPlayerId;
    const player = getState().players.list.find(({ id }) => currentPlayerId === id);
    const currentLocationId = player?.location.id;
    dispatch(setTargetSector(currentLocationId));
};

export default playersSlice.reducer;
