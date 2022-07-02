import { MonopolyCardProps } from './MonopolyCard.model';
import CardButton from 'shared/ui/CardButton';
import HousePoint from 'entities/HousePoint';
import NameBadge from 'entities/NameBadge';
import classes from './MonopolyCard.module.scss';
import ColoredSquare from 'shared/ui/ColoredSquare';

const MonopolyCard = ({
	color,
	estateList,
	ownerName,
    isShowToOwner,
}: MonopolyCardProps) => {
	const sectorList = estateList.map(({ title, buildingList }, index) => {
		const street = buildingList.map(({ state, price, buildType }) => {
			return <div className={classes.point} key={title + index + 'point' + price}>
				<HousePoint state={state} price={price} buildType={buildType} />
			</div>;
		});
		
		return <div className={classes.sector} key={title + index + 'sector'}>
			<p className={classes.subheading}>{title}</p>
			<div className={classes.street}>{street}</div>
		</div>;
	});

	return (
		<div className={classes.card}>
			<div className={classes.owner}>
				<NameBadge name={ownerName} isShowToOwner={isShowToOwner}/>
			</div>
            <div className={classes['color-box']}>
                <ColoredSquare color={color ?? 'blue'} />
            </div>
			<div className={classes.content}>
				<p className={classes.title}>Монополия</p>
				{sectorList}
			</div>
			<div className={classes.actions}>
				<div className={classes.btn}>
					<CardButton negative
						title='Купить'
						details='-90'
						click={() => console.log('Купить')}/>
				</div>
				<div className={classes.btn}>
					<CardButton
						title='Купить'
						details='-90'
						click={() => console.log('Купить')}/>
				</div>
			</div>
		</div>
	);
};

export default MonopolyCard;