import { RootState } from 'app/store';

export const selectPlayerLocationId = (state: RootState, playerId: number): number | null => {
    const player = state.players.list.find(({ id }) => playerId === id);
    if (player) {
        return player.location.id;
    }
    return null;
};

export default selectPlayerLocationId;