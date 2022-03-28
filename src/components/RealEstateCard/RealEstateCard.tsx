import { RealEstateCardProps } from './RealEstateCard.model';
import CardButton from '../CardButton';
import HousePoint from '../HousePoint';
import NameBadge from '../NameBadge';
import classes from './RealEstateCard.module.scss';

const RealEstateCard = ({
    data: {
        buildingList,
        color,
        title,
        price,
        ownerName,
        isShowToOwner,
    },
    onbuySectorClick
}: RealEstateCardProps) => {
	const housePointList = buildingList?.map(({ state, price, buildType }) => {
		return <div className={classes.point} key={title + price}>
			<HousePoint state={state}
				price={price}
				buildType={buildType}/>
		</div>;
	});

    let btnTitle: string = '';
    let btnDetails: string = '';
    let btnAction = onbuySectorClick;

    if (ownerName) {
        if (isShowToOwner) {
            btnTitle = 'Продать участок';
            btnDetails = `+${price / 2}`;
        } else {
            btnTitle = 'Оплатить аренду';
            btnDetails = `-${price}`;
        }
    } else {
        btnTitle = 'Купить участок'
        btnDetails = `-${price}`;
    }

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
                    <CardButton negative={!isShowToOwner}
                        title={btnTitle}
                        details={btnDetails}
                        click={btnAction} />
                </div>
            </div>
		</div>
	);
};

export default RealEstateCard;