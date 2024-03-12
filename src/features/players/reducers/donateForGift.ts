import { AppDispatch, RootState } from 'app/store';
import {
  decreasePlayersCashCount,
  increasePlayersCashCount,
} from '../playersSlice';

const donateForGift =
  (amount: number, playerId: number) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const playersList = getState().players.list.filter(
      ({ id }) => id !== playerId
    );

    for (const player of playersList) {
      dispatch(
        decreasePlayersCashCount({
          playerId: player.id,
          count: amount,
        })
      );
    }

    dispatch(
      increasePlayersCashCount({
        playerId,
        count: amount * playersList.length,
      })
    );
  };

export default donateForGift;
