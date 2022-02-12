import { LineType } from "../../models/LineType.type";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class UtilityCompanySector implements Sector {
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    owner: null | number;

    constructor(line: LineType, title: string, price: number) {
        this.line = line;
        this.title = title;
        this.type = 'UtilityCompany';
        this.price = price;
        this.owner = null;
    }
}