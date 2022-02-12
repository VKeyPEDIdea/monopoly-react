import { LineType } from "../../models/LineType.type";
import { ChanceSector } from "../Sector/ChanceSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorFabric } from "./SectorFabric.model";

class ChanceSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string): Sector {
        return new ChanceSector(line, title);
    }
}

export const chanceSectorFabric = new ChanceSectorFabric();