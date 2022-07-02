import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import classes from './PlayingFieldPage.module.scss';
import MiddleBoard from 'entities/MiddleBoard';
import SectorLine from 'entities/SectorLine';
import PlayerChipContainer from 'entities/PlayerChip/PlayerChipContainer';
import {
    selectPlayersForChips,
    selectCurrentPlayerId,
    selectPlayersIdList,
} from 'features/players/selectors';
import {
    selectTargetSectorId,
    selectTopLineSectors,
    selectBottomLineSectors,
} from 'features/field/selectors';
import { moveChipToTargetSector } from 'features/players/reducers';
import { setPlayerCoordinatesByPlayerId } from 'features/players/playersSlice';
import getSectorCoordinates from 'utilities/getSectorCoordinates';

const PlayingField = () => {
    const playerChipsList = useAppSelector(selectPlayersForChips);
    const topLineSectors = useAppSelector(selectTopLineSectors);
    const bottomLineSectors = useAppSelector(selectBottomLineSectors);
    const targetSectorId = useAppSelector(selectTargetSectorId);
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
    const [isInitialized, setIsInitialized] = useState(false);
    const playersIdList = useAppSelector(selectPlayersIdList);
    const dispatch = useAppDispatch();

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

	return (
		<div className={classes.field}>
            <PlayerChipContainer list={playerChipsList}
                currentPlayerId={currentPlayerId}/>
            <SectorLine position='Top'
                list={topLineSectors}
                target={targetSectorId}
                getСoordinates={showCoordinates}
            />
			<MiddleBoard />
            <SectorLine position='Bottom'
                list={bottomLineSectors}
                target={targetSectorId}
                getСoordinates={showCoordinates}
            />
		</div>
	);
};

export default PlayingField;