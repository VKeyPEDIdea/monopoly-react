import classes from './Rating.module.scss';
import RatingLine from './RatingLine';
import { RatingProps } from './RatingProps.model';

const Rating = ({
    players,
    maxScore,
    currentPlayer,
}: RatingProps) => {
    const ratingLines = players.map(({
        name,
        cashCount,
        propertyCount,
        id,
    }, index) => {
        return <RatingLine
            key={index + '-rating-line'}
            position={index + 1} 
            name={name}
            cashCount={cashCount}
            propertyCount={propertyCount}
            isCurrent={currentPlayer === id}
            graphColumns={{
                cashCol: cashCount * 100 / maxScore,
                moneyCol: propertyCount * 100 / maxScore,
        }}/>
    });

    return (
        <div className={classes.rating}>
            {ratingLines}
        </div>
    );
};

export default Rating;