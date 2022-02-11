import { LineType } from "../../models/LineType.type";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class BankSector implements Sector {
    line: LineType;
    readonly title: string;
    readonly type: SectorType;

    constructor(line: LineType, title: string) {
        this.line = line;
        this.title = title;
        this.type = 'Bank';
    }
}