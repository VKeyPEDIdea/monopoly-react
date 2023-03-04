import { MonopolyCardProps } from './MonopolyCard.model';
import CardButton from 'shared/ui/CardButton';
import NameBadge from 'entities/NameBadge';
import classes from './MonopolyCard.module.scss';
import ColoredSquare from 'shared/ui/ColoredSquare';
import HousePointList from 'entities/HousePointList';

const MonopolyCard = ({
	color,
	estateList,
	ownerName,
    rentPrice,
    housePrice,
    isShowToOwner,
    onPayRentClick,
    onBuyHouseClick,
}: MonopolyCardProps) => {
	const sectorList = estateList.map(({ title, buildingList }, index) => {
		return <div className={classes.sector} key={title + index + 'sector'}>
			<p className={classes.subheading}>{title}</p>
			<div className={classes.street}>
                <HousePointList list={buildingList} />
            </div>
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
                {
                    isShowToOwner
                        ? <>
                            <div className={classes.btn}>
                                <CardButton
                                    title='Снести дом'
                                    details={housePrice / 2}
                                    click={() => console.log('Продать')}/>
                            </div>
                            <div className={classes.btn}>
                                <CardButton negative
                                    title='Построить дом'
                                    details={-housePrice}
                                    click={onBuyHouseClick}/>
                            </div>
                        </>
                        : <div className={classes.btn}>
                            <CardButton negative
                                title='Оплатить аренду'
                                details={-rentPrice}
                                click={onPayRentClick}/>
                        </div>
                }
			</div>
		</div>
	);
};

export default MonopolyCard;