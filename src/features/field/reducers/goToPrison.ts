import { PRISON_SECTOR_ID } from 'config/constants';
import { AppDispatch } from 'app/store';
import { setTargetSector } from '../playingFieldSlice';
import transferToTarger from './transferToTarger';

const goToPrison = (playerId: number) => (dispatch: AppDispatch) => {
  dispatch(setTargetSector(PRISON_SECTOR_ID));
  dispatch(
    transferToTarger({
      playerId,
      targetSectorId: PRISON_SECTOR_ID,
    })
  );
};

export default goToPrison;
