import PlayerChip from '.';
import { PlayerChipInfo } from './PlayerChipContainer.interface';

interface PlayerChipContainer {
  list: PlayerChipInfo[];
  currentPlayerId: number;
}

const PlayerChipContainer = ({
  list,
  currentPlayerId,
}: PlayerChipContainer) => {
  const chips = list.map(({ name, coordinates, id }) => {
    return (
      <PlayerChip
        key={`${id}-${name}`}
        name={name}
        isCurrent={currentPlayerId === id}
        coordinates={coordinates}
      />
    );
  });

  return <>{chips}</>;
};

export default PlayerChipContainer;
