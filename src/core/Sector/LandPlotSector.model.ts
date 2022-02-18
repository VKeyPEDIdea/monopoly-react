import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";
import { SectorCreateArg } from "../SectorFabric/SectorCreateArg.interface";
import { Sector } from "./Sector.interface";
import { SectorType } from "./SectorType.model";

export class LandPlotSector implements Sector {
    id: number;
    line: LineType;
    readonly title: string;
    readonly type: SectorType;
    readonly price: number;
    readonly color: Color;
    owner: null | number;

    constructor({ id, line, title, price, color}: SectorCreateArg) {
        this.id = id;
        this.line = line;
        this.title = title;
        this.type = 'LandPlot';
        this.price = price ?? 0;
        this.color = color ?? 'blue';
        this.owner = null;
    }

    buySector() {}
    holdAuction() {}
    payRent() {}
    putInPledge() {}
}