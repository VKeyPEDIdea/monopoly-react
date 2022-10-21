import CardButton from 'shared/ui/CardButton';
import classes from './ImageCard.module.scss';

interface TrapCardProps {
    detailsText: string;
    imgSrc: string;
    btn: {
        title: string;
        clickHandler: () => void;
    }
}

const ImageCard = ({
    detailsText,
    imgSrc,
    btn: {
        title,
        clickHandler,
    }
}: TrapCardProps) => {
    return (
        <div className={classes.card}>
            <p className={classes.details}>{detailsText}</p>
            <img className={classes.image} src={imgSrc} alt='' />
            <div className={classes.actions}>
                <div className={classes.btn}>
                    <CardButton title={title}
                        click={clickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;