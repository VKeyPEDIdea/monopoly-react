import RealEstateCard from '../../RealEstateCard';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
	return (
		<div className={classes.board}>
			<div className={classes['left-section']}>
				Left section
			</div>
			<div className={classes['middle-section']}>
				<RealEstateCard />
			</div>
			<div className={classes['right-section']}>
				Right section
			</div>
		</div>
	);
};

export default MiddleBoard;