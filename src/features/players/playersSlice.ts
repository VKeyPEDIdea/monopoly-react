import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from "../../app/store";
import { Player } from "../../core/Player/Player.interface";
import { Person } from "../../core/Player/Person.model";
import { PlayerChipInfo } from "../../components/PlayerChip/PlayerChipContainer.interface";

interface PlayersState {
    list: Player[],
}

const testUser = { ...new Person('Реджайна', true, 7000) };
// const testUser2 = { ...new Person('Павел', false, 5000) };
// const testUser3 = { ...new Person('Тихон', false, 5000) };

const initialState: PlayersState = {
    list: [testUser],
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
    },
});

export const {
    changePlayerLocation,
    setPlayerCoordinatesByPlayerId,
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
    return state.players.list.map(({ name, location }) => { 
        return {
            name,
            coordinates: location.coordinates,
        }; 
    });
};

export const selectCoordinatesByPlayerId = (state: RootState) => {
    return 
};

export default playersSlice.reducer;
