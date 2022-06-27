import { RootState, AppDispatch } from 'app/store';
import {
    increasePlayersCashCount,
    decreasePlayersCashCount
} from 'features/players/playersSlice';

const payRent = (payload: {
    sectorId: number | null,
    ownerPlayerId: number | null,
    tenantPlayerId: number
}) => (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(({ id }) => id === payload.sectorId);
    
    if (sector) {
        const { rentPrice } = sector;

        dispatch(increasePlayersCashCount({
            count: rentPrice || 0,
            playerId: payload.ownerPlayerId,
        }));
        dispatch(decreasePlayersCashCount({
            count: rentPrice || 0,
            playerId: payload.tenantPlayerId,
        }));
    }
};

export default payRent;