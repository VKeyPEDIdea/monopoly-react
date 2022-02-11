import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from "../../app/store";
import { Player } from "../../core/Player/Player.interface";
import { Person } from "../../core/Player/Person.model";

interface PlayersState {
    list: Player[],
}

const testUser = new Person(
    'Реджайна', true, 7000
);
const testUser2 = new Person(
    'Павел', false, 5000
);
const testUser3 = new Person(
    'Тихон', false, 5000
);

const initialState: PlayersState = {
    list: [testUser, testUser2, testUser3],
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
});

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

export default playersSlice.reducer;
