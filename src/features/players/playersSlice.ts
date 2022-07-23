import { createSlice } from '@reduxjs/toolkit';
import { Player } from 'core/Player/Player.interface';
import { Person } from 'core/Player/Person.model';

interface PlayersState {
    list: Player[],
    currentPlayerId: number;
}

const initialState: PlayersState = {
    list: [
        { ...new Person('Реджайна', 1500) },
        { ...new Person('Павел', 1500) },
        { ...new Person('Тихон', 1500) },
        { ...new Person('Максим', 1500) }
    ],
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

export default playersSlice.reducer;
