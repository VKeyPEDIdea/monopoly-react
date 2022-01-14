import { SectorProps } from '../../../models/Sector.model';
import classes from './Sector.module.scss';

const Sector = ({
	isBottom,
	price,
	title,
	color,
	type,
}: SectorProps) => {	
	if (type !== 'Земельный участок') {
		return (
			<div className={[classes.sector, classes['sector--simple']].join(' ')}>
				<p className={classes.title}>{title}</p>
			</div>
		);
	} else if (isBottom) {
		return (
			<div className={classes.sector}>
				<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
				<div className={classes.meta}>
					<p className={`${classes.title} ${classes['title--bottom']}`}>{title}</p>
					<p className={`${classes.price} ${classes['price--bottom']}`}>{price}</p>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.sector}>
			<div className={classes.meta}>
				<p className={classes.price}>{price}</p>
				<p className={classes.title}>{title}</p>
			</div>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
		</div>
	);
};

export default Sector;