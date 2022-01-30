import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import type { AppDispatch, RootState } from "../../app/store";
import { Player } from "../../models/Player.model";

interface PlayersState {
    list: Player[],
}

const testUser: Player = {
    name: 'Реджайна',
    cashCount: 7000,
    isCurrent: true,
    propertyCount: 3000,
};
const testUser2: Player = {
    name: 'Павел',
    cashCount: 5000,
    isCurrent: false,
    propertyCount: 2000,
};
const testUser3: Player = {
    name: 'Тихон',
    cashCount: 5000,
    isCurrent: false,
    propertyCount: 1000,
};

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
