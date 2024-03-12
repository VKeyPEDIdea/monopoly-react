import type { RootState } from 'app/store';

const selectTargetSectorId = (state: RootState) => {
  return [state.field.previousSector.id, state.field.targetSector.id];
};

export default selectTargetSectorId;
