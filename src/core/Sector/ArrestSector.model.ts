import { LineType } from 'models/LineType.type';
import { SectorCreateArg } from 'core/SectorFabric/SectorCreateArg.interface';
import { Sector } from 'core/Sector/Sector.interface';
import { SectorType } from 'core/Sector/SectorType.model';

export class ArrestSector implements Sector {
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
    this.type = 'Arrest';
    this.currentPlayerId = 0;
    this.stepCount = 0;
  }
}
