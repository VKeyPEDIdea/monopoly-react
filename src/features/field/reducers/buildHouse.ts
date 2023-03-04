import { AppDispatch, RootState } from 'app/store';
import { Sector } from 'core/Sector/Sector.interface';
import { decreasePlayersCashCount } from 'features/players/playersSlice';
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

            for (let i = 0; i < firstSectorHouseList.length; i++) {                
                if (firstSectorHouseList[i].state === 'vacant') {
                    houseIndex = i;
                    break;
                }
            }

            sectorId = sectorList[0].id;
        } else {
            const indexOfLastUpgraded = sectorList.indexOf(lastUpgradedSector);
            const nextSector = sectorList[indexOfLastUpgraded + 1] ? sectorList[indexOfLastUpgraded + 1] : sectorList[0];

            for (let i = 0; i < nextSector.houseList!.length; i++) {
                if (nextSector.houseList![i].state === 'vacant') {
                    houseIndex = i;
                    break;
                }
            }

            sectorId = nextSector.id;
            // todo: add logic for updating housePrice in sector
        }
        
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
};

export default buildHouse;