import classes from './ColoredSquare.module.scss';
import { Color } from 'models/color.type';

const ColoredSquare = ({
    color
}: {
    color: Color;
}) => {
    return (
        <div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
    );
};

export default ColoredSquare;
