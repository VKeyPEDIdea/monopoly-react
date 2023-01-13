import { payForTransfer } from 'features/players/reducers';
import { useDispatch } from 'react-redux';
import { setTargetSector } from '../playingFieldSlice';
import transferToTarger from './transferToTarger';

const transferToPort = (
    targetSectorId: number,
    transferPrice: number,
    owner: number | null,
    playerId: number,
) => {
    const dispatch = useDispatch();

    dispatch(payForTransfer(transferPrice, playerId, owner))
    dispatch(setTargetSector(targetSectorId));
    dispatch(transferToTarger({
        playerId: playerId,
        targetSectorId,
    }));
};

export default transferToPort;