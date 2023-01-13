import { PRISON_SECTOR_ID } from 'config/constants';
import { useDispatch } from 'react-redux';
import { setTargetSector } from '../playingFieldSlice';
import transferToTarger from './transferToTarger';

const goToPrison = (playerId: number) => {
    const dispatch = useDispatch();

    dispatch(setTargetSector(PRISON_SECTOR_ID));
    dispatch(transferToTarger({
        playerId,
        targetSectorId: PRISON_SECTOR_ID,
    }));
};

export default goToPrison;