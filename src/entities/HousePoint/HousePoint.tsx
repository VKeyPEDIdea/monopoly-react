import { HousePointProps } from './HousePoint.model';
import GIcon from 'shared/ui/GIcon';
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
		<div className={[
			classes.house,
			state === 'vacant' ? classes.vacant : ''
		].join(' ')}>
			<div className={classes.icon}>
				<GIcon title={buildType} color={color}/>
			</div>
			<div className={classes.price}>{price}</div>
		</div>
	);
};

export default HousePoint;