import Sector from "../Sector";
import classes from './BottomLine.module.scss';
import { bottomLineConfig } from "./bottomLine.config";

const BottomLine = () => {
	const sectorList = bottomLineConfig.map(({
		title,
		color,
		price,
		type,
	}, index) => {
		return <Sector key={'sector' + index}
			title={title}
			price={price}
			color={color}
			isBottom={true}
			type={type} />;
	});

	return (
		<div className={classes.bottomline}>
			{sectorList}
		</div>
	);
};

export default BottomLine;