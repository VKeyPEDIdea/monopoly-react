import { PRISON_SECTOR_ID } from 'config/constants';
import { setTargetSector } from '../playingFieldSlice';
import transferToTarger from './transferToTarger';
import { AppDispatch } from 'app/store';

const goToPrison = (playerId: number) => (dispatch: AppDispatch) => {
    dispatch(setTargetSector(PRISON_SECTOR_ID));
    dispatch(transferToTarger({
        playerId,
        targetSectorId: PRISON_SECTOR_ID,
    }));
};

export default goToPrison;