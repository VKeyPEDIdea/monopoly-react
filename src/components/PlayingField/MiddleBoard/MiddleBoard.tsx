import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { takeStepOnField } from '../../../features/field/playingFieldSlice';
import {
    selectCurrentPlayerId,
    selectMaxScore,
    selectOrderedPlayersList,
} from '../../../features/players/playersSlice';
import Dice from '../../Dice/Dice';
import ExtraDimensionСard from '../../ExtraDimensionСard';
import Rating from '../../Rating';
import SectorCardPresenter from '../../SectorCardPresenter';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
    const players = useAppSelector(selectOrderedPlayersList);
    const maxScore = useAppSelector(selectMaxScore);
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
    const dispatch = useDispatch();
    const onRollDiceHandler = (diceValue: [number, number]) => {       
        dispatch(takeStepOnField({
            dice: diceValue,
            playerId: currentPlayerId
        }));
    };

	return (
		<div className={classes.board}>
			<div className={classes['left-section']}>
                <Rating players={players}
                    currentPlayer={currentPlayerId}
                    maxScore={maxScore}/>
                <div className={classes['dice-box']}>
				    <Dice onRollDice={onRollDiceHandler}/>
                </div>
			</div>
			<div className={classes['middle-section']}>
                <ExtraDimensionСard scale='1.1'>
                    <SectorCardPresenter />

                </ExtraDimensionСard>
			</div>
			<div className={classes['right-section']}>
				Right section
			</div>
		</div>
	);
};

export default MiddleBoard;