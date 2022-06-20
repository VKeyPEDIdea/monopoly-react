import { useState } from 'react';
import classes from './FlipCard.module.scss';

const FlipCard = ({
    front,
    back,
}: {
    front: React.ReactNode;
    back: React.ReactNode;
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const clickHandler = () => {
        setIsFlipped(true);
    };

    return (
        <div className={classes.container}>
            <div className={
                isFlipped
                    ? [classes['card--flip'], classes.card].join(' ')
                    : classes.card} onClick={clickHandler}
            >
                <div className={classes.front}>{front}</div>
                <div className={classes.back}>{back}</div>
            </div>
        </div>
    );
};

export default FlipCard;