import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";
import { UtilityCompanySector } from "../Sector/UtilityCompanySector.model";
import { SectorFabric } from "./SectorFabric.model";

class UtilityCompanySectorFabric extends SectorFabric {
    createSector(line: LineType, title: string, price: number): Sector {
        return new UtilityCompanySector(line, title, price);
    }
}

export const utilityCompanySectorFabric = new UtilityCompanySectorFabric();