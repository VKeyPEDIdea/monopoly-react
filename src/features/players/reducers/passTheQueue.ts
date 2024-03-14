import { AppDispatch, RootState } from 'app/store';
import {
  setDiceActivityStatus,
  setTargetSector,
} from 'features/field/playingFieldSlice';
import { turnToNextPlayer } from '../playersSlice';

const passTheQueue =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(turnToNextPlayer());
    dispatch(setDiceActivityStatus(true));
    const { currentPlayerId } = getState().players;
    const player = getState().players.list.find(
      ({ id }) => currentPlayerId === id
    );
    const currentLocationId = player?.location.id;
    dispatch(setTargetSector(currentLocationId));
  };

export default passTheQueue;
