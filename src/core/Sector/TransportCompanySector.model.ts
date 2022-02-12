import { LineType } from "../../models/LineType.type";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class TransportCompanySector implements Sector {
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    owner: null | number;

    constructor(line: LineType, title: string, price: number) {
        this.line = line;
        this.title = title;
        this.type = 'TransportCompany';
        this.price = price;
        this.owner = null;
    }
}