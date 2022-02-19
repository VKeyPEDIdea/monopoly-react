import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { takeStepOnField } from '../../../features/field/playingFieldSlice';
import { selectMaxScore, selectOrderedPlayersList } from '../../../features/players/playersSlice';
import Dice from '../../Dice/Dice';
import ExtraDimensionСard from '../../ExtraDimensionСard';
import MonopolyCard from '../../MonopolyCard';
import Rating from '../../Rating';
import RealEstateCard from '../../RealEstateCard';
import { realEstateExampleConfig } from '../../RealEstateCard/realEstateExample.config';
import { estateList } from '../../RealEstateCard/realEstateListExample.config';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
    const players = useAppSelector(selectOrderedPlayersList);
    const maxScore = useAppSelector(selectMaxScore);
    const dispatch = useDispatch();
    const onRollDiceHandler = (diceValue: [number, number]) => {       
        dispatch(takeStepOnField(diceValue));
    };
    
	return (
		<div className={classes.board}>
			<div className={classes['left-section']}>
                <Rating players={players} maxScore={maxScore}/>
                <div className={classes['dice-box']}>
				    <Dice onRollDice={onRollDiceHandler}/>
                </div>
			</div>
			<div className={classes['middle-section']}>
                <ExtraDimensionСard scale='1.1'>
                    <RealEstateCard title='Бульвар мира'
                        color='green'
                        ownerName='Реджайна Обожаевна'
                        buildingList={realEstateExampleConfig}/>
                    {/* <MonopolyCard
                        color='green'
                        ownerName='Реджайна Обожаевна'
                        estateList={estateList}/>             */}
                </ExtraDimensionСard>
			</div>
			<div className={classes['right-section']}>
				Right section
			</div>
		</div>
	);
};

export default MiddleBoard;