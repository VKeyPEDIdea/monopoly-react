import Sector from "../Sector";
import { topLineConfig } from "./topLine.config";
import classes from './TopLine.module.scss';

const TopLine = () => {
	const sectorList = topLineConfig.map(({
		title,
		color,
		price,
		type,
	}, index) => {
		return <Sector key={'sector' + index}
			title={title}
			price={price}
			color={color}
			type={type} />;
	});
	
	return (
		<div className={classes.topline}>
			{sectorList}
		</div>
	);
};

export default TopLine;