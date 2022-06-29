import { Coordinates } from 'models/Coordinates.interface';
import { AppDispatch } from 'app/store';
import { setPlayerCoordinatesByPlayerId } from '../playersSlice';

const moveChipToTargetSector = (payload: {
    currentPlayerId: number;
    coordinates: Coordinates
}) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(setPlayerCoordinatesByPlayerId({
            playerId: payload.currentPlayerId,
            coordinates: payload.coordinates
        }));
    }, 1000);
};

export default moveChipToTargetSector;