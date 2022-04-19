import CardButton from '../../CardButton';
import classes from './FaceSideMailCard.module.scss';

const FaceSideMailCard = () => {
    return (
        <div className={classes.card}>
            <p className={classes.details}>Оплата услуг доктора</p>
            <div className={classes.actions}>
                <CardButton title='Заплатите'
                    click={() => console.log('Оплата')} details='-50' negative/>
            </div>
        </div>
    );
}

export default FaceSideMailCard;