import { LineType } from '../../models/LineType.type';
import { SectorCreateArg } from '../SectorFabric/SectorCreateArg.interface';
import { Sector } from './Sector.interface';
import { SectorType } from './SectorType.model';

export class TrapSector implements Sector {
    id: number;
    line: LineType;
    readonly title: string;
    readonly type: SectorType;

    constructor({ id, line, title }: SectorCreateArg) {
        this.id = id;
        this.line = line;
        this.title = title;
        this.type = 'Trap';
    }
}