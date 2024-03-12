import type { RootState } from 'app/store';

const selectFieldIdByName = (state: RootState, name: string) => {
  const { sectorList } = state.field;
  const field = sectorList.find(({ title }) => title === name);

  return field?.id;
};

export default selectFieldIdByName;
