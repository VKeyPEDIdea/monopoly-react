import { AppDispatch } from 'app/store';
import {
  decreasePlayersCashCount,
  increasePlayersCashCount,
} from '../playersSlice';

const changePlayerBalance =
  ({
    type,
    payload,
  }: {
    type: 'decrease' | 'increase';
    payload: {
      count: number;
      playerId: number;
    };
  }) =>
  (dispatch: AppDispatch) => {
    dispatch(
      type === 'decrease'
        ? decreasePlayersCashCount(payload)
        : increasePlayersCashCount(payload)
    );
  };

export default changePlayerBalance;
