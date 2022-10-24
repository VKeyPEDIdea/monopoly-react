import { TransportCompanyCardProps } from './TransportCompanyCard.model';
import CardButton from 'shared/ui/CardButton';
import NameBadge from 'entities/NameBadge';
import classes from './TransportCompanyCard.module.scss';
import confetti from 'canvas-confetti';
import ColoredSquare from 'shared/ui/ColoredSquare';

const TransportCompanyCard = ({
    data: {
        color,
        title,
        price,
        ownerName,
        isShowToOwner,
        rentPrice,
    },
    onbuySectorClick,
    onSellSectorClick,
    onPayRentClick,
}: TransportCompanyCardProps) => {
    let btnTitle: string = '';
    let btnDetails: number = 0;
    let btnAction = onbuySectorClick;

    if (ownerName) {
        if (isShowToOwner) {
            btnTitle = 'Продать участок';
            btnDetails = price / 2;
            btnAction = onSellSectorClick;
        } else {
            btnTitle = 'Оплатить аренду';
            btnDetails = rentPrice || 0;
            btnAction = onPayRentClick;
        }
    } else {
        btnTitle = 'Купить участок'
        btnDetails = -price;
        btnAction = () => {
            onbuySectorClick();
            confetti({
                particleCount: 300,
                spread: 100
            });
        };
    }

	return (
		<div className={classes.card}>
            {
                color
                    ? <div className={classes['color-box']}>
                        <ColoredSquare color={color ?? 'blue'} />
                    </div>
                    : null
            }
			<div className={classes.content}>
                { ownerName ? <div className={classes.owner}>
                    <NameBadge name={ownerName} isShowToOwner={isShowToOwner}/>
                </div> : null }
				<p className={classes.title}>{title}</p>
                <img className={classes.image} src={'images/cards/cargo-ship.png'} alt='' />
			</div>
            <div className={classes.actions}>
                <div className={classes.btn}>
                    <CardButton negative={!isShowToOwner}
                        title={btnTitle}
                        details={btnDetails}
                        click={btnAction} />
                </div>
                <div className={classes.btn}>
                    <CardButton negative={!isShowToOwner}
                        title={'Северный'}
                        details={btnDetails}
                        click={btnAction} />
                </div>
                <div className={classes.btn}>
                    <CardButton negative={!isShowToOwner}
                        title={'Восточный'}
                        details={btnDetails}
                        click={btnAction} />
                </div>
                <div className={classes.btn}>
                    <CardButton negative={!isShowToOwner}
                        title={'Южный'}
                        details={btnDetails}
                        click={btnAction} />
                </div>
            </div>
		</div>
	);
};

export default TransportCompanyCard;