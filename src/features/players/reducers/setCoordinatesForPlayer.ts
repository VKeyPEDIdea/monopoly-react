import { AppDispatch, RootState } from 'app/store';
import { setPlayerCoordinatesByPlayerId } from 'features/players/playersSlice';
import { moveChipToTargetSector } from 'features/players/reducers';
import { SectorCoordinates } from 'models/SectorCoordinates.interface';

const setCoordinatesForPlayer = (payload: {
    coordinates: SectorCoordinates;
    isInitialized: boolean;
}) => (dispatch: AppDispatch, getState: () => RootState) => {
    const { coordinates, isInitialized } = payload;
    const { currentPlayerId, list } = getState().players;

    if (isInitialized) {
        dispatch(moveChipToTargetSector({
            currentPlayerId,
            coordinates,
        }));
    } else {
        for (const id of list) {
            dispatch(setPlayerCoordinatesByPlayerId({ playerId: id, coordinates }));
        }
    }
};

export default setCoordinatesForPlayer;