import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";
import { TrapSector } from "../Sector/TrapSector.model";
import { SectorFabric } from "./SectorFabric.model";

class TrapSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string): Sector {
        return new TrapSector(line, title);
    }
}

export const trapSectorFabric = new TrapSectorFabric();