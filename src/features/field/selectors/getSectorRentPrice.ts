import { RootState } from 'app/store';

const getSectorRentPrice = (state: RootState, sectorId: number) => {
  const sector = state.field.sectorList.find(
    (sector) => sector.id === sectorId
  );

  if (sector && sector.rentPrice) {
    const { houseList } = sector;

    if (houseList) {
      const houseListCopy = [...houseList];
      const house = houseListCopy
        .reverse()
        .find((house) => house.state === 'acquired');

      if (house) {
        return house.price;
      }
    }

    return sector.rentPrice! * 2;
  }

  return 0;
};

export default getSectorRentPrice;
