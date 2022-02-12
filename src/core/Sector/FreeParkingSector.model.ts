import { LineType } from "../../models/LineType.type";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class FreeParkingSector implements Sector {
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;

    constructor(line: LineType, title: string, price: number) {
        this.line = line;
        this.title = title;
        this.type = 'FreeParking';
        this.price = price;
    }
}