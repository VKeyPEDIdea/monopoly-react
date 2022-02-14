import { LineType } from "../../models/LineType.type";
import { SectorCreateArg } from "../SectorFabric/SectorCreateArg.interface";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class TransportCompanySector implements Sector {
    id: number;
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    owner: null | number;
    target?: boolean;

    constructor({ id, line, title, price }: SectorCreateArg) {
        this.id = id;
        this.line = line;
        this.title = title;
        this.type = 'TransportCompany';
        this.price = price ?? 0;
        this.owner = null;
        this.target = false;
    }
}