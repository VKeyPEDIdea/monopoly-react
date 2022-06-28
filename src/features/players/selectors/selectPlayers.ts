import { RootState } from 'app/store';
import { Player } from 'core/Player/Player.interface';

const selectPlayers = (state: RootState): Player[] => state.players.list;

export default selectPlayers;