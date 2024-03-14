import { BuildType } from 'models/BuildType.type';
import { HousePointState } from './HousePointState.type';

export interface HousePointProps {
  state: HousePointState;
  price: number;
  buildType: BuildType;
}
