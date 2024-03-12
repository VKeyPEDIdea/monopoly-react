import { AppDispatch, RootState } from 'app/store';
import {
  decreasePlayersCashCount,
  increasePlayersCashCount,
} from '../playersSlice';

const payForTransfer =
  (price: number, playerId: number, destination: number | null) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const { list } = getState().players;
    const player = list.find(({ id }) => id === playerId);
    let destinationPlayer;

    if (destination) {
      destinationPlayer = list.find(({ id }) => id === destination);
    }

    if (player) {
      dispatch(
        decreasePlayersCashCount({
          playerId: player.id,
          count: price,
        })
      );
    }

    if (destinationPlayer) {
      dispatch(
        increasePlayersCashCount({
          playerId: destinationPlayer.id,
          count: price,
        })
      );
    }
  };

export default payForTransfer;
