import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";
import { UtilityCompanySector } from "../Sector/UtilityCompanySector.model";
import { SectorFabric } from "./SectorFabric.model";

export class UtilityCompanySectorFabric extends SectorFabric {
    createSector(line: LineType, title: string, price: number): Sector {
        return new UtilityCompanySector(line, title, price);
    }
}