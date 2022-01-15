import { HousePointProps } from '../../models/HousePoint.model';
import GIcon from '../GIcon/';
import classes from './HousePoint.module.scss';

enum Color {
	Vacant = '#cccccc',
	Acquired = '#5733FF',
}

const HousePoint = ({
	state,
	price,
	buildType,
}: HousePointProps) => {
	let color;

	switch (state) {
		case 'vacant':
			color = Color.Vacant;
			break;
		case 'acquired':
			color = Color.Acquired;
			break;
	}

	return (
		<div className={classes.house}>
			<div className={classes.icon}>
				<GIcon title={buildType} color={color}/>
			</div>
			<div className={classes.price}>{price}</div>
		</div>
	);
};

export default HousePoint;