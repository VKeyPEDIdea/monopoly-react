import { Coordinates } from 'models/Coordinates.interface';
import { AppDispatch } from 'app/store';
import { setPlayerCoordinatesByPlayerId } from '../playersSlice';

const moveChipToTargetSector = ({
    currentPlayerId,
    coordinates,
}: {
    currentPlayerId: number;
    coordinates: Coordinates
}) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(setPlayerCoordinatesByPlayerId({
            playerId: currentPlayerId,
            coordinates
        }));
    }, 1000);
};

export default moveChipToTargetSector;