import classes from './Rating.module.scss';
import RatingLine from './RatingLine';
import { RatingProps } from './RatingProps.model';

const Rating = ({
    players
}: RatingProps) => {
    // move to Redux ?
    const orderedPlayers = players.sort((plr1, plr2) => {
        return (plr2.cashCount + plr2.propertyCount) - (plr1.cashCount + plr1.propertyCount);
    });

    const maxScore = orderedPlayers[0].cashCount + orderedPlayers[0].propertyCount;
    
    const ratingLines = orderedPlayers.map(({
        name,
        cashCount,
        propertyCount,
        isCurrent
    }, index) => {
        return <RatingLine
            key={index + 'rating line'}
            position={index + 1} 
            name={name}
            cashCount={cashCount}
            propertyCount={propertyCount}
            isCurrent={isCurrent}
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