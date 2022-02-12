import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class LandPlotSector implements Sector {
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    readonly color: Color;
    owner: null | number;

    constructor(line: LineType, title: string, price: number, color: Color) {
        this.line = line;
        this.title = title;
        this.type = 'LandPlot';
        this.price = price;
        this.color = color;
        this.owner = null;
    }

    buySector() {}
    holdAuction() {}
    payRent() {}
    putInPledge() {}
}