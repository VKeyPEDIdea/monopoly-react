import { RootState } from 'app/store';

const selectPlayerByID = (state: RootState, id: number | null) => {
  return state.players.list.find((player) => player.id === id)?.name || null;
};

export default selectPlayerByID;
