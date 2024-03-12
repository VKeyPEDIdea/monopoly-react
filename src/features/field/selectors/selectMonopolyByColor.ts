import { RootState } from 'app/store';
import { Color } from 'models/color.type';

const selectMonopolyByColor = (state: RootState, color: Color) => {
  return state.field.sectorList.filter((sector) => sector.color === color);
};

export default selectMonopolyByColor;
