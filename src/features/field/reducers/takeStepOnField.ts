import { RootState, AppDispatch } from 'app/store';
import { changePlayerLocation } from 'features/players/playersSlice';
import {
  setDice,
  setDiceActivityStatus,
  setTargetSector,
} from '../playingFieldSlice';

const takeStepOnField =
  (payload: { dice: [number, number]; playerId: number }) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setDice(payload.dice));
    const doubleCount = getState().field.dice.double;

    const { list } = getState().players;
    const player = list.find(({ id }) => id === payload.playerId);
    const locationId = player ? player.location.id : 0;
    const [d1Value, d2Value] = payload.dice;
    const result = locationId + d1Value + d2Value;
    let targetSectorId: number;

    if (doubleCount === 3) {
      targetSectorId = 10;
    } else if (result > 39) {
      const diff = result - 40;
      targetSectorId = diff;
    } else {
      targetSectorId = result;
    }

    dispatch(setTargetSector(targetSectorId));
    dispatch(
      changePlayerLocation({
        playerId: player?.id,
        locationId: targetSectorId,
      })
    );
  };

export default takeStepOnField;
