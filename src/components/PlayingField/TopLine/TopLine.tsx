import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectTopLineSectors, setTargetCoordinates, setTargetSector } from "../../../features/field/playingFieldSlice";
import getSectorCoordinates from "../../../utilities/getSectorCoordinates";
import Sector from "../Sector";
import classes from './TopLine.module.scss';

const TopLine = () => {
    const topLineSectors = useAppSelector(selectTopLineSectors);
    const dispatch = useAppDispatch();
    const showCoordinates = (element: HTMLDivElement | null) => {
        const coordinates = getSectorCoordinates(element, 'Top');
        dispatch(setTargetCoordinates(coordinates));
    };

    useEffect(() => {
        dispatch(setTargetSector(0));
    }, []);
	const sectorList = topLineSectors.map(({
		id,
        title,
		color,
		price,
		type,
        target
	}, index) => {
		return <Sector key={'sector' + index}
            id={id}
			title={title}
			price={price}
			color={color}
            line='Top'
			type={type}
            getСoordinates={showCoordinates}
            target={target}
            />;
	});
	
	return (
		<div className={classes.topline}>
			{sectorList}
		</div>
	);
};

export default TopLine;