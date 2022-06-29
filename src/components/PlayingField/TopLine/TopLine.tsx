import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    selectTargetSectorId,
    selectTopLineSectors
} from 'features/field/selectors';
import { selectPlayersIdList } from 'features/players/selectors';
import { selectCurrentPlayerId } from 'features/players/selectors';
import { moveChipToTargetSector } from 'features/players/reducers';
import { setPlayerCoordinatesByPlayerId } from 'features/players/playersSlice';
import getSectorCoordinates from 'utilities/getSectorCoordinates';
import Sector from 'components/PlayingField/Sector/';
import classes from './TopLine.module.scss';

const TopLine = () => {
    const topLineSectors = useAppSelector(selectTopLineSectors);
    const targetSectorId = useAppSelector(selectTargetSectorId);
    const playersIdList = useAppSelector(selectPlayersIdList);
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
    const dispatch = useAppDispatch();
    const [isInitialized, setIsInitialized] = useState(false);
    
    const showCoordinates = (element: HTMLDivElement | null) => {
        const coordinates = getSectorCoordinates(element, 'Top');
        if (isInitialized) {
            dispatch(moveChipToTargetSector({
                currentPlayerId,
                coordinates,
            }));
        } else {
            for (const id of playersIdList) {
                dispatch(setPlayerCoordinatesByPlayerId({ playerId: id, coordinates }));
            }
            setIsInitialized(true);
        }
    };

	const sectorList = topLineSectors.map(({
		id,
        title,
		color,
		price,
		type,
        owner,
	}, index) => {
		return <Sector key={'sector' + index}
            id={id}
			title={title}
			price={price}
			color={color}
            line='Top'
			type={type}
            owner={owner}
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