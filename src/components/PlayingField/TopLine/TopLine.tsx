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
        isBottom
	}, index) => {
		return <Sector key={'sector' + index}
			title={title}
			price={price}
			color={color}
            isBottom={isBottom}
			type={type} />;
	});
	
	return (
		<div className={classes.topline}>
			{sectorList}
		</div>
	);
};

export default TopLine;