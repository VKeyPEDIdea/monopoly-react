import { RootState } from 'app/store';

const selectCurrentPlayerId = (state: RootState): number => {
  return state.players.currentPlayerId;
};

export default selectCurrentPlayerId;
