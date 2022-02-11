import { useAppSelector } from "../../../app/hooks";
import { selectTopLineSectors } from "../../../features/field/playingFieldSlice";
import Sector from "../Sector";
import classes from './TopLine.module.scss';

const TopLine = () => {
    const topLineSectors = useAppSelector(selectTopLineSectors);
	const sectorList = topLineSectors.map(({
		title,
		color,
		price,
		type,
        line
	}, index) => {
		return <Sector key={'sector' + index}
			title={title}
			price={price}
			color={color}
            line={line}
			type={type} />;
	});
	
	return (
		<div className={classes.topline}>
			{sectorList}
		</div>
	);
};

export default TopLine;