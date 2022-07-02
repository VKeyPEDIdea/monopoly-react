import { Color } from 'models/color.type';
import classes from './Badge.module.scss';

const Badge = ({
    color,
    label,
    border,
}: {
    color: Color;
    label: string;
    border?: boolean;
}) => {
    return (
        <span className={[
            classes.badge,
            classes['badge--' + color],
            border ? classes['badge--border'] : '',
        ].join(' ')}>{label}</span>

    );
};

export default Badge;