import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    selectTargetSectorId,
    selectTopLineSectors, setTargetSector,
} from "../../../features/field/playingFieldSlice";
import { setPlayerCoordinatesByPlayerId } from "../../../features/players/playersSlice";
import getSectorCoordinates from "../../../utilities/getSectorCoordinates";
import Sector from "../Sector";
import classes from './TopLine.module.scss';

const TopLine = () => {
    const topLineSectors = useAppSelector(selectTopLineSectors);
    const targetSectorId = useAppSelector(selectTargetSectorId);
    const dispatch = useAppDispatch();
    
    const showCoordinates = (element: HTMLDivElement | null) => {
        const coordinates = getSectorCoordinates(element, 'Top');
        dispatch(setPlayerCoordinatesByPlayerId({ playerId: 0, coordinates }));
    };

    useEffect(() => {
        dispatch(setTargetSector(targetSectorId));
    }, []);

	const sectorList = topLineSectors.map(({
		id,
        title,
		color,
		price,
		type,
	}, index) => {
		return <Sector key={'sector' + index}
            id={id}
			title={title}
			price={price}
			color={color}
            line='Top'
			type={type}
            getСoordinates={showCoordinates}
            target={targetSectorId === id}
            />;
	});
	
	return (
		<div className={classes.topline}>
			{sectorList}
		</div>
	);
};

export default TopLine;