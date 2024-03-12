import { SectorCreateArg } from 'core/SectorFabric/SectorCreateArg.interface';
import { LineType } from 'models/LineType.type';
import { SectorType } from './SectorType.model';
import { Sector } from './Sector.interface';

export class PrisonSector implements Sector {
  id: number;

  line: LineType;

  currentPlayerId: number;

  stepCount: number;

  readonly title: string;

  readonly type: SectorType;

  constructor({ id, line, title }: SectorCreateArg) {
    this.id = id;
    this.line = line;
    this.title = title;
    this.type = 'Prison';
    this.currentPlayerId = 0;
    this.stepCount = 0;
  }
}
