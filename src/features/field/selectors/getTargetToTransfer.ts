import { RootState } from 'app/store';
import { Sector } from 'core/Sector/Sector.interface';
import getRandomArrayItem from 'utilities/getRandomArrayItem';

const getTargetToTransfer = (state: RootState) => {
  const randomTarget: Sector = getRandomArrayItem(state.field.sectorList);
  return {
    id: randomTarget.id,
    title: randomTarget.title,
  };
};

export default getTargetToTransfer;
