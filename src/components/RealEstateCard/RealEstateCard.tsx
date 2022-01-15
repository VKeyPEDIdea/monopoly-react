import { RealEstateCardProps } from '../../models/RealEstateCardProps.model';
import HousePoint from '../HousePoint';
import NameBadge from '../NameBadge';
import classes from './RealEstateCard.module.scss';

const RealEstateCard = ({
	buildingList,
	color,
	title,
	ownerName,
}: RealEstateCardProps) => {
	const housePointList = buildingList.map(({ state, price, buildType }) => {
		return <div className={classes.point}>
			<HousePoint key={title + price}
				state={state}
				price={price}
				buildType={buildType}/>
		</div>;
	});

	return (
		<div className={classes.estate}>
			{ ownerName ? <div className={classes.owner}>
				<NameBadge name={ownerName}/>
			</div> : null }
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
			<div className={classes.content}>
				<p className={classes.title}>{title}</p>
				<div className={classes.street}>
					{housePointList}
				</div>
			</div>
		</div>
	);
};

// Добавить кнопки «Купить» и «Аукцион»

export default RealEstateCard;