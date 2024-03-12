import type { RootState } from 'app/store';

const selectTopLineSectors = (state: RootState) => {
  return state.field.sectorList.filter(({ line }) => line === 'Top');
};

export default selectTopLineSectors;
