import { AppDispatch } from 'app/store';
import { changePlayerLocation } from 'features/players/playersSlice';

const transferToTarger =
  (payload: { targetSectorId: number; playerId: number }) =>
  (dispatch: AppDispatch) => {
    dispatch(
      changePlayerLocation({
        playerId: payload.playerId,
        locationId: payload.targetSectorId,
      })
    );
  };

export default transferToTarger;
