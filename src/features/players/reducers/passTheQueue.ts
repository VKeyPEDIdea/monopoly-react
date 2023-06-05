import { AppDispatch, RootState } from 'app/store';
import { turnToNextPlayer } from '../playersSlice';
import { setDiceActivityStatus, setTargetSector } from 'features/field/playingFieldSlice';

const passTheQueue = () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(turnToNextPlayer());
    dispatch(setDiceActivityStatus(true));
    const currentPlayerId = getState().players.currentPlayerId;
    const player = getState().players.list.find(({ id }) => currentPlayerId === id);
    const currentLocationId = player?.location.id;
    dispatch(setTargetSector(currentLocationId));
};

export default passTheQueue;