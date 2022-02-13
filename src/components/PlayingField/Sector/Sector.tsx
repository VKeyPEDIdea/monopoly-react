import classes from './Sector.module.scss';
import { Sector as SectorProps } from '../../../core/Sector/Sector.interface';

const Sector = ({
    id,
	line,
	price,
	title,
	color,
	type,
}: SectorProps) => {	
	if (type !== 'LandPlot') {
		return (
			<div className={[classes.sector, classes['sector--simple']].join(' ')}>
				<p className={classes.title}>{title}</p>
			</div>
		);
	} else if (line === 'Bottom') {
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
		<div className={classes.sector} data-sector-id={id}>
			<div className={classes.meta}>
				<p className={classes.price}>{price}</p>
				<p className={classes.title}>{title}</p>
			</div>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
		</div>
	);
};

export default Sector;