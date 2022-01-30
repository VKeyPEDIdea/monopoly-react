import Sector from "../Sector";
import classes from './BottomLine.module.scss';
import { useAppSelector } from "../../../app/hooks";
import { selectBottomLineSectors } from "../../../features/field/playingFieldSlice";

const BottomLine = () => {
    const bottomLineSectors = useAppSelector(selectBottomLineSectors);
	const sectorList = bottomLineSectors.map(({
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
		<div className={classes.bottomline}>
			{sectorList}
		</div>
	);
};

export default BottomLine;