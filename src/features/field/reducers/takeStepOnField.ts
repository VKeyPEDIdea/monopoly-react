import { RootState, AppDispatch } from 'app/store';
import { setDice } from '../playingFieldSlice';
import { setTargetSector } from '../playingFieldSlice';
import { changePlayerLocation } from 'features/players/playersSlice';

const takeStepOnField = (payload: {dice: [number, number], playerId: number}) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setDice(payload.dice));

    const { list } = getState().players;
    const player = list.find(({ id }) => id === payload.playerId);
    const locationId = player ? player.location.id : 0;
    const [d1Value, d2Value] = payload.dice;
    const result = locationId + d1Value + d2Value;
    let targetSectorId: number;

    if (result > 39) {
        const diff = result - 40;
        targetSectorId = diff;
    } else {
        targetSectorId = result;
    }
    
    dispatch(setTargetSector(targetSectorId));
    dispatch(changePlayerLocation({
        playerId: player?.id,
        locationId: targetSectorId
    }));
};

export default takeStepOnField;