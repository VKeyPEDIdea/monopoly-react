import CardButton from 'shared/ui/CardButton';
import classes from './FaceSideMailCard.module.scss';

interface FaceSideMailCardProps {
    detailsText: string;
    btn: {
        title: string;
        clickHandler: () => void;
        count: number | null;
        negative: boolean; 
    }
}

const FaceSideMailCard = ({
    detailsText,
    btn: {
        title,
        clickHandler,
        count,
        negative,
    }
}: FaceSideMailCardProps) => {
    return (
        <div className={classes.card}>
            <p className={classes.details}>{detailsText}</p>
            <div className={classes.actions}>
                <div className={classes.btn}>
                    <CardButton title={title}
                        click={clickHandler} details={count} negative={negative}/>
                </div>
            </div>
        </div>
    );
};

export default FaceSideMailCard;