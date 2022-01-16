import { CardButtonProps } from '../../models/CardButtonProps.model';
import classes from './CardButton.module.scss';

const CardButton = ({
	title,
	details,
	negative,
	click,
}: CardButtonProps) => {
	return (
		<div className={classes.btn} onClick={click}>
			<p className={classes.title}>{title}</p>
			<p className={[
				classes.details,
				negative ? classes['details--negative'] : classes['details--positive']
			].join(' ')}>{details}</p>
		</div>
	);
};

export default CardButton;