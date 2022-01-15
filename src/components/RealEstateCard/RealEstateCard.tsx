import HousePoint from '../HousePoint';
import classes from './RealEstateCard.module.scss';

const RealEstateCard = () => {
	const color = 'green';

	return (
		<div className={classes.estate}>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
			<div className={classes.content}>
				<p className={classes.title}>Бульвар мира</p>
				<div className={classes.street}>
					<HousePoint state='acquired' price={200} buildType='house'/>
					<HousePoint state='acquired' price={300} buildType='house'/>
					<HousePoint state='acquired' price={400} buildType='house'/>
					<HousePoint state='vacant' price={500} buildType='house'/>
					<HousePoint state='vacant' price={1000} buildType='hotel'/>
				</div>
			</div>
		</div>
	);
};

export default RealEstateCard;