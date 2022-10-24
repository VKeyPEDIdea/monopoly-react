import { LineType } from '../../models/LineType.type';
import { SectorCreateArg } from '../SectorFabric/SectorCreateArg.interface';
import { Sector } from './Sector.interface';
import { SectorType } from './SectorType.model';

export class TransportCompanySector implements Sector {
    id: number;
    line: LineType;
    currentPlayerId: number;
    stepCount: number;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    readonly rentPrice: number;
    readonly transferPrice: number;
    owner: null | number;

    constructor({ id, line, title, price, rentPrice, transferPrice }: SectorCreateArg) {
        this.id = id;
        this.line = line;
        this.title = title;
        this.type = 'TransportCompany';
        this.price = price ?? 0;
        this.rentPrice = rentPrice ?? 0;
        this.transferPrice = transferPrice ?? 0;
        this.owner = null;
        this.currentPlayerId = 0;
        this.stepCount = 0;
    }
}