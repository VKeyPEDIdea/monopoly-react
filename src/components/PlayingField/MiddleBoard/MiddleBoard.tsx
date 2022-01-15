import MonopolyCard from '../../MonopolyCard';
import RealEstateCard from '../../RealEstateCard';
import { realEstateExampleConfig } from '../../RealEstateCard/realEstateExample.config';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
	return (
		<div className={classes.board}>
			<div className={classes['left-section']}>
				Left section
			</div>
			<div className={classes['middle-section']}>
				{/* <RealEstateCard title='Бульвар мира'
					color='green'
					ownerName='Реджайна Обожаевна'
					buildingList={realEstateExampleConfig}/> */}
				<MonopolyCard />
			</div>
			<div className={classes['right-section']}>
				Right section
			</div>
		</div>
	);
};

export default MiddleBoard;