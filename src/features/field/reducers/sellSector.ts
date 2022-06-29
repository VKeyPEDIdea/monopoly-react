import { RootState, AppDispatch } from 'app/store';
import { BuySectorData } from 'models/BuySectorData.interface';
import { increasePlayersCashCount } from 'features/players/playersSlice';
import { setFreeSector } from '../playingFieldSlice';
import { decreasePlayersPropertyCount } from 'features/players/playersSlice';

const sellSector = (payload: BuySectorData) => (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(({ id }) => id === payload.sectorId);

    if (sector) {
        const { price } = sector;
        dispatch(increasePlayersCashCount({
            count: price ? price / 2 : 0,
            playerId: payload.playerId
        }));
        dispatch(setFreeSector({ sectorId: payload.sectorId }));
        dispatch(decreasePlayersPropertyCount({
            count: price ? price / 2 : 0,
            playerId: payload.playerId,
        }))
    }
};

export default sellSector;