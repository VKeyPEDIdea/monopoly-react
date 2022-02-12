import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";

export abstract class SectorFabric {
    abstract createSector(line: LineType, title: string, price?: number, color?: Color): Sector;
}