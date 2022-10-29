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
        harborList
    },
    onbuySectorClick,
    onSellSectorClick,
    onPayRentClick,
    onTransferClick
}: TransportCompanyCardProps) => {
    let btnTitle: string = '';
    let btnDetails: number = 0;
    let btnAction = onbuySectorClick;

    if (ownerName) {
        if (isShowToOwner) {
            btnTitle = 'Продать';
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

    const transferActionList = harborList.map(({ id, title, transferPrice, owner}) => {
        return (
            <div className={classes.btn}>
                <CardButton negative={true}
                    title={title}
                    details={isShowToOwner ? transferPrice - 20 : transferPrice}
                    click={() => onTransferClick(id, isShowToOwner ? transferPrice - 20 : transferPrice, isShowToOwner ? null : owner)} />
            </div>
        );
    });
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
                { transferActionList }
            </div>
		</div>
	);
};

export default TransportCompanyCard;