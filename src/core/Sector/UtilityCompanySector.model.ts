import { LineType } from '../../models/LineType.type';
import { SectorCreateArg } from '../SectorFabric/SectorCreateArg.interface';
import { Sector } from './Sector.interface';
import { SectorType } from './SectorType.model';

export class UtilityCompanySector implements Sector {
  id: number;

  line: LineType;

  currentPlayerId: number;

  stepCount: number;

  readonly title: string;

  readonly type: SectorType;

  readonly price: number;

  owner: null | number;

  constructor({ id, line, title, price }: SectorCreateArg) {
    this.id = id;
    this.line = line;
    this.title = title;
    this.type = 'UtilityCompany';
    this.price = price ?? 0;
    this.owner = null;
    this.currentPlayerId = 0;
    this.stepCount = 0;
  }
}
