import { ChanceSector } from "../Sector/ChanceSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorCreateArg } from "./SectorCreateArg.interface";
import { SectorFabric } from "./SectorFabric.model";

class ChanceSectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new ChanceSector(config);
    }
}

export const chanceSectorFabric = new ChanceSectorFabric();