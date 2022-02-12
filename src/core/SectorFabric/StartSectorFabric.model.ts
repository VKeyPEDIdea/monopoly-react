import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";
import { StartSector } from "../Sector/StartSector.model";
import { SectorFabric } from "./SectorFabric.model";

class StartSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string): Sector {
        return new StartSector(line, title);
    }
}

export const startSectorFabric = new StartSectorFabric();