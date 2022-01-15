import BottomLine from "./BottomLine";
import TopLine from "./TopLine/";
import classes from './PlayingField.module.scss';
import MiddleBoard from "./MiddleBoard";

const PlayingField = () => {
	return (
		<div className={classes.field}>
			<TopLine />
			<MiddleBoard />
			<BottomLine />
		</div>
	);
};

export default PlayingField;