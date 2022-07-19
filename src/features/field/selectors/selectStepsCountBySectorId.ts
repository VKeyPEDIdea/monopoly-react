import type { RootState } from 'app/store';
const FIELDS_COUNT = 40;

const selectStepsCountBySectorId = (state: RootState, currentSectorId: number) => {
    const targetSectorId = state.field.targetSector.id;
    const startSectorId = state.field.previousSector.id;
    const isNewRound = targetSectorId < startSectorId;

    let stepCount: number;
    let result: number;
    
    if (isNewRound) {
        stepCount = targetSectorId - startSectorId + FIELDS_COUNT;

        if (targetSectorId < currentSectorId) {
            result = stepCount - (targetSectorId - currentSectorId) - FIELDS_COUNT; 
        } else {
            result = stepCount - (targetSectorId - currentSectorId);
        }
    } else {
        stepCount = targetSectorId - startSectorId;
        result = stepCount - (targetSectorId - currentSectorId);
    }
    
    if (result <= 0 || result > stepCount) {
        return null;
    }

    return result;
};

export default selectStepsCountBySectorId;