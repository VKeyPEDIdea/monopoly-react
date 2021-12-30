import classes from './Sector.module.scss';

interface SectorProps {
	isBottom?: boolean;
};

const Sector = ({
	isBottom,
}: SectorProps) => {
	const color = 'orange';
	
	if (isBottom) {
		return (
			<div className={classes.sector}>
				<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
				<div className={classes.meta}>
					<p className={`${classes.title} ${classes['title--bottom']}`}>Гапеева</p>
					<p className={`${classes.price} ${classes['price--bottom']}`}>200</p>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.sector}>
			<div className={classes.meta}>
				<p className={classes.price}>200</p>
				<p className={classes.title}>Гапеева</p>
			</div>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
		</div>
	);
};

export default Sector;