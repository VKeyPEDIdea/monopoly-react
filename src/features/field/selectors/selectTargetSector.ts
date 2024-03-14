import type { RootState } from 'app/store';

const selectTargetSector = (state: RootState) => {
  return (
    state.field.sectorList.find(
      ({ id }) => id === state.field.targetSector.id
    ) || state.field.sectorList[0]
  );
};

export default selectTargetSector;
