import { useEffect } from "react";
import PlayerChip from ".";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    selectTargetSectorCoordinates,
    setTargetSector
} from "../../features/field/playingFieldSlice";
import { PlayerChipInfo } from "./PlayerChipContainer.interface";

interface PlayerChipContainer {
    list: PlayerChipInfo[];
}

const PlayerChipContainer = ({
    list,
}: PlayerChipContainer) => {
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(setTargetSector(targetSectorId));
    // }, []);
    
    const chips = list.map(({ name, locationId }, index) => {
        // dispatch(setTargetSector(locationId));
        const coordinates = useAppSelector(selectTargetSectorCoordinates);

        return <PlayerChip key={name + index}
            name={name}
            coordinates={coordinates}/>;
    });

    return (
        <>{chips}</>
    );
};

export default PlayerChipContainer;