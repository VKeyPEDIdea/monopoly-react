import classes from './Rating.module.scss';
import RatingLine from './RatingLine';

const Rating = () => {
    const player1 = {
        name: 'Регина',
        cash: 2000,
        propertyPrice: 5000,
        isCurrent: true,
    };
    const player2 = {
        name: 'Паша',
        cash: 10500,
        propertyPrice: 5500,
        isCurrent: false,
    };

    const sum1 = player1.cash + player1.propertyPrice;
    const sum2 = player2.cash + player2.propertyPrice;
    const max = Math.max(sum1, sum2);
    const maxCashCol = player1.cash * 100 / max;
    const maxPropertyCol = player1.propertyPrice * 100 / max;
    const minCashCol = player2.cash * 100 / max;
    const minPropertyCol = player2.propertyPrice * 100 / max;

    return (
        <div className={classes.rating}>
            <RatingLine position={1}
                name={player1.name}
                cashCount={player1.cash}
                propertyCount={player1.propertyPrice}
                isCurrent={player1.isCurrent}
                graphColumns={{
                    cashCol: maxCashCol,
                    moneyCol: maxPropertyCol,
                }}/>
            <RatingLine position={2}
                name={player2.name}
                cashCount={player2.cash}
                propertyCount={player2.propertyPrice}
                isCurrent={player2.isCurrent}
                graphColumns={{
                    cashCol: minCashCol,
                    moneyCol: minPropertyCol,
                }}/>
        </div>
    );
};

export default Rating;