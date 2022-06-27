import type { RootState } from 'app/store';

const selectBottomLineSectors = (state: RootState) => { 
    return state.field.sectorList.filter(({ line }) => line === 'Bottom');
};

export default selectBottomLineSectors;