import BottomLine from "./BottomLine";
import TopLine from "./TopLine/";
import classes from './PlayingField.module.scss';

const PlayingField = () => {
	return (
		<div className={classes.field}>
			<TopLine />
			<div>central piece</div>
			<BottomLine />
		</div>
	);
};

export default PlayingField;