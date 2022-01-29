import { RealEstateCardProps } from '../../models/RealEstateCardProps.model';
import CardButton from '../CardButton';
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
		return <div className={classes.point} key={title + price}>
			<HousePoint state={state}
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
            <div className={classes.actions}>
                <div className={classes.btn}>
                    <CardButton negative
                        title='Купить'
                        details='-90'
                        click={() => console.log('Купить')} />
                </div>
                <div className={classes.btn}>
                    <CardButton
                        title='Продать'
                        details='+45'
                        click={() => console.log('Продать')} />
                </div>
            </div>
		</div>
	);
};

export default RealEstateCard;