import { AppDispatch, RootState } from 'app/store';
import { BuySectorData } from 'models/BuySectorData.interface';
import {
  decreasePlayersCashCount,
  increasePlayersPropertyCount,
} from 'features/players/playersSlice';
import { setOwnerForSector } from '../playingFieldSlice';

const buySector =
  (payload: BuySectorData) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(
      ({ id }) => id === payload.sectorId
    );
    if (sector) {
      dispatch(
        decreasePlayersCashCount({
          count: sector?.price,
          playerId: payload.playerId,
        })
      );
      dispatch(setOwnerForSector(payload));
      dispatch(
        increasePlayersPropertyCount({
          count: sector.price ? sector.price / 2 : 0,
          playerId: payload.playerId,
        })
      );
    }
  };

export default buySector;
