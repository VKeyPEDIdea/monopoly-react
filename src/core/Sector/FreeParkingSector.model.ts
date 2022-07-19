import { LineType } from '../../models/LineType.type';
import { SectorCreateArg } from '../SectorFabric/SectorCreateArg.interface';
import { Sector } from './Sector.interface';
import { SectorType } from './SectorType.model';

export class FreeParkingSector implements Sector {
    id: number;
    line: LineType;
    currentPlayerId: number;
    stepCount: number;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;

    constructor({ id, line, title, price }: SectorCreateArg) {
        this.id = id;
        this.line = line;
        this.title = title;
        this.type = 'FreeParking';
        this.price = price ?? 0;
        this.currentPlayerId = 0;
        this.stepCount = 0;
    }
}