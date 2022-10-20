import CardButton from 'shared/ui/CardButton';
import classes from './TrapCard.module.scss';

interface TrapCardProps {
    detailsText: string;
    btn: {
        title: string;
        clickHandler: () => void;
    }
}

const TrapCard = ({
    detailsText,
    btn: {
        title,
        clickHandler,
    }
}: TrapCardProps) => {
    return (
        <div className={classes.card}>
            <p className={classes.details}>{detailsText}</p>
            <img className={classes.image} src='/images/cards/arrested.png' alt='trap'/>
            <div className={classes.actions}>
                <div className={classes.btn}>
                    <CardButton title={title}
                        click={clickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default TrapCard;