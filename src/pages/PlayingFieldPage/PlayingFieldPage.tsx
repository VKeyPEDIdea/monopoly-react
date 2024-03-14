import React, { useState } from 'react';
import { useAppSelector } from 'app/hooks';
import { useDispatch } from 'react-redux';
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
import { SectorCoordinates } from 'models/SectorCoordinates.interface';
import classes from './PlayingFieldPage.module.scss';

const PlayingField = () => {
  const playerChipsList = useAppSelector(selectPlayersForChips);
  const topLineSectors = useAppSelector(selectTopLineSectors);
  const bottomLineSectors = useAppSelector(selectBottomLineSectors);
  const [, targetSectorId] = useAppSelector(selectTargetSectorId);
  const currentPlayerId = useAppSelector(selectCurrentPlayerId);
  const [isInitialized, setIsInitialized] = useState(false);
  const playersIdList = useAppSelector(selectPlayersIdList);
  const dispatch = useDispatch();
  const lineType = targetSectorId < 19 ? 'Top' : 'Bottom';

  const handleIsInit = (coordinates: SectorCoordinates) => {
    dispatch(
      moveChipToTargetSector({
        currentPlayerId,
        coordinates,
      })
    );
  };

  const handleIsNotInit = (coordinates: SectorCoordinates) => {
    for (const id of playersIdList) {
      dispatch(setPlayerCoordinatesByPlayerId({ playerId: id, coordinates }));
    }
    setIsInitialized(true);
  };

  const showCoordinates = (element: HTMLDivElement | null) => {
    const coordinates = getSectorCoordinates(element, lineType);
    if (isInitialized) {
      handleIsInit(coordinates);
    } else {
      handleIsNotInit(coordinates);
    }
  };

  return (
    <div className={classes.field}>
      <PlayerChipContainer
        list={playerChipsList}
        currentPlayerId={currentPlayerId}
      />
      <SectorLine
        position="Top"
        list={topLineSectors}
        target={targetSectorId}
        getCoordinates={showCoordinates}
      />
      <MiddleBoard />
      <SectorLine
        position="Bottom"
        list={bottomLineSectors}
        target={targetSectorId}
        getCoordinates={showCoordinates}
      />
    </div>
  );
};

export default PlayingField;
