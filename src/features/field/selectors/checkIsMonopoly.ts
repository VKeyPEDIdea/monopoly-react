import { RootState } from 'app/store';

const checkIsMonopoly = (state: RootState, fieldId: number): boolean => {
    const field = state.field.sectorList.find((sector) => sector.id === fieldId);
    
    if (!field) {
        return false;
    }
    
    const { owner, color } = field;
    
    if (owner || owner === 0) {
        const colorGroup = state.field.sectorList.filter((sector) => sector.color === color);
    
        for (let i = 0; i < colorGroup.length; i++) {
            if (colorGroup[i].owner !== owner) {
                return false;
            }
        }

        return true;
    }

    return false;
};

export default checkIsMonopoly;