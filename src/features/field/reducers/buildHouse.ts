import { AppDispatch, RootState } from 'app/store';
import { Sector } from 'core/Sector/Sector.interface';
import { decreasePlayersCashCount } from 'features/players/playersSlice';
import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';
import { setHouseState, setLastUpgradedSector } from '../playingFieldSlice';

const buildHouse = (sectorId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(sector => sector.id === sectorId);

    if (sector) {
        const { color } = sector;
        const sectorList: Sector[] = getState().field.sectorList
            .filter(sector => sector.color === color);

        const lastUpgradedSector = sectorList.find(sector => sector.isLastUpgraded);
        let sectorId = null;
        let houseIndex = null;

        if (!lastUpgradedSector) {
            const firstSectorHouseList = sectorList[0].houseList!;
            houseIndex = getIndexOfVacantHouse(firstSectorHouseList);
            sectorId = sectorList[0].id;
        } else {
            const indexOfLastUpgraded = sectorList.indexOf(lastUpgradedSector);
            const nextSector = sectorList[indexOfLastUpgraded + 1] ? sectorList[indexOfLastUpgraded + 1] : sectorList[0];
            houseIndex = getIndexOfVacantHouse(nextSector.houseList!);
            sectorId = nextSector.id;
            // todo: add logic for updating housePrice in sector
        }

        if (typeof houseIndex === 'number') {
            dispatch(setLastUpgradedSector({
                sectorId,
            }));
            dispatch(setHouseState({
                sectorId,
                houseIndex,
                state: 'acquired',
            }));
            dispatch(decreasePlayersCashCount({
                count: sector.housePrice,
                playerId: sector.owner,
            }));
        }
    }
};

function getIndexOfVacantHouse(houseList: HousePointProps[]) {
    for (let i = 0; i < houseList.length; i++) {
        if (houseList[i].state === 'vacant') {
            return i;
        }
    }
}

export default buildHouse;