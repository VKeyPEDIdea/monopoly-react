import { AppDispatch, RootState } from 'app/store';
import { Sector } from 'core/Sector/Sector.interface';
import { increasePlayersCashCount } from 'features/players/playersSlice';
import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';
import { setHouseState, setLastUpgradedSector } from '../playingFieldSlice';

const demolishHouse = (sectorId: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    const sector = getState().field.sectorList.find(sector => sector.id === sectorId);

    if (sector) {
        const { color } = sector;
        const sectorList: Sector[] = getState().field.sectorList
            .filter(sector => sector.color === color);

        const lastUpgradedSector = sectorList.find(sector => sector.isLastUpgraded);
        let sectorId = null;
        let demolishHouseIndex = null;

        if (!lastUpgradedSector) {
            return null;
        } else {
            const indexOfLastUpgraded = sectorList.indexOf(lastUpgradedSector);
            const prevSector = sectorList[indexOfLastUpgraded - 1] ? sectorList[indexOfLastUpgraded - 1] : sectorList[sectorList.length - 1];
            demolishHouseIndex = getIndexOfAquiredHouse(lastUpgradedSector.houseList!);
            sectorId = prevSector.id;
        }

        if (typeof demolishHouseIndex === 'number') {    
            dispatch(setLastUpgradedSector({
                sectorId,
            }));
            dispatch(setHouseState({
                sectorId: lastUpgradedSector.id,
                houseIndex: demolishHouseIndex,
                state: 'vacant',
            }));
            dispatch(increasePlayersCashCount({
                count: sector.housePrice! / 2,
                playerId: sector.owner,
            }));
        }
    }
};

function getIndexOfAquiredHouse(houseList: HousePointProps[]) {
    for (let i = houseList.length - 1; i >= 0; i--) {
        if (houseList[i].state === 'acquired') {
            return i;
        }
    }
}

export default demolishHouse;