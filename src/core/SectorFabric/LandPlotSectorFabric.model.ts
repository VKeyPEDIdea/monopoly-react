import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";
import { LandPlotSector } from "../Sector/LandPlotSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorFabric } from "./SectorFabric.model";

export class LandPlotSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string, price: number, color: Color): Sector {
        return new LandPlotSector(line, title, price, color);
    }
}