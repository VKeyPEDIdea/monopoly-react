import { RootState } from 'app/store';

const selectPlayersIdList = (state: RootState): number[] => {
    return state.players.list.map(({ id }) => id);
};

export default selectPlayersIdList;