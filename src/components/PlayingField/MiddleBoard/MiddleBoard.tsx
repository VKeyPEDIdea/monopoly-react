import Dice from '../../Dice/Dice';
import ExtraDimensionСard from '../../ExtraDimensionСard';
import MonopolyCard from '../../MonopolyCard';
import Rating from '../../Rating';
import { players } from '../../Rating/rating.config';
import RealEstateCard from '../../RealEstateCard';
import { realEstateExampleConfig } from '../../RealEstateCard/realEstateExample.config';
import { estateList } from '../../RealEstateCard/realEstateListExample.config';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
	return (
		<div className={classes.board}>
			<div className={classes['left-section']}>
                <Rating players={players}/>
                <div className={classes['dice-box']}>
				    <Dice />
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