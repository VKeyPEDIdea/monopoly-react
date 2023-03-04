import { RootState} from 'app/store';

const getHousePriceBySectorId = (state: RootState, sectorId: number) => {
    const sector = state.field.sectorList.find(sector => sector.id === sectorId);
    return sector?.housePrice;
};

export default getHousePriceBySectorId;