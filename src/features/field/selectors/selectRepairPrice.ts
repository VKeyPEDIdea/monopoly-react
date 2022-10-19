import { RootState } from 'app/store';
import { Sector } from 'core/Sector/Sector.interface';

const HOUSE_REPAIR_PRICE = 40;
const HOTEL_REPAIR_PRICE = 115;

const getPropertyHouseCount = (sector: Sector): number => {
    let count: number = 0;
    if (sector.houseList) {
        for (const { state } of sector.houseList) {
            if (state === 'acquired') {
                count += 1;
            }
        }
    }
    return count;
};

const selectRepairPrice = (state: RootState, currentPlayerID: number): {
    repairPrice: number;
    houseCount: number;
    hotelCount: number;
} => {
    const propertySectorList = state.field.sectorList.filter(({ id }) => id === currentPlayerID);
    let houseCount = 0;
    let hotelCount = 0;

    const repairPrice = propertySectorList.reduce((acc, sector) => {
        const propertyCount = getPropertyHouseCount(sector);
        let housePrice = 0;
        let hotelPrice = 0;

        if (propertyCount === 5) {
            houseCount += 4;
            hotelCount += 1;
            housePrice = HOUSE_REPAIR_PRICE * 4;
            hotelPrice = HOTEL_REPAIR_PRICE;
        } else {
            houseCount += propertyCount;
            housePrice = HOUSE_REPAIR_PRICE * houseCount;
        }

        return acc + housePrice + hotelPrice;
    }, 0);

    return {
        repairPrice,
        houseCount,
        hotelCount,
    }
};

export default selectRepairPrice;