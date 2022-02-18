import PlayerChip from ".";
import { PlayerChipInfo } from "./PlayerChipContainer.interface";

interface PlayerChipContainer {
    list: PlayerChipInfo[];
}

const PlayerChipContainer = ({
    list,
}: PlayerChipContainer) => {
    const chips = list.map(({ name, coordinates }, index) => {
        return <PlayerChip key={name + index}
            name={name}
            coordinates={coordinates}/>;
    });

    return (
        <>{chips}</>
    );
};

export default PlayerChipContainer;