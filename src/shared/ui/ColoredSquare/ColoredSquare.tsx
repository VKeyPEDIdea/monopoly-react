import { Color } from 'models/color.type';
import classes from './ColoredSquare.module.scss';

const ColoredSquare = ({ color }: { color: Color }) => {
  return <div className={`${classes.color} ${classes[`color--${color}`]}`} />;
};

export default ColoredSquare;
