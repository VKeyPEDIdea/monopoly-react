import GIcon from '../../GIcon';
import classes from './RatingLine.module.scss';
import { RatingLineProps } from './RatingLineProps.model';

const ICON_COLOR = '#C8CDDE';
const RATIO = 2;

const RatingLine = ({
    position,
    name,
    cashCount,
    propertyCount,
    isCurrent,
    graphColumns: {
        cashCol,
        moneyCol
    }
}: RatingLineProps) => {
    return (
        <>
            <div className={[classes.position, isCurrent ? classes['position--current'] : ''].join(' ')}>{position}</div>
            <div className={classes.meta}>
                <p className={classes.name}>{name}</p>
                <div className={classes.counts}>
                    <div className={classes.cash}>
                        <span className={classes.currency}>$</span><span> </span>
                        <span className={classes['cash-count']}>{cashCount}</span>
                    </div>
                    <div className={classes.property}>
                        <div className={classes.icon}>
                            <GIcon title='house'
                                size={18}
                                color={ICON_COLOR}/>
                        </div>
                        <span>{propertyCount}</span>
                    </div>
                </div>
            </div>
            <div className={classes.graph}>
                <div className={[classes.column, classes.money].join(' ')}
                    style={{ width: `${cashCol * RATIO}px`}}></div>
                <div className={[classes.column, classes.estate].join(' ')}
                    style={{ width: `${moneyCol * RATIO}px`}}></div>
            </div>
        </>
    );
};

export default RatingLine;