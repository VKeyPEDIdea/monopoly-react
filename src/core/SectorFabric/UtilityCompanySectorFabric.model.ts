import { Sector } from "../Sector/Sector.interface";
import { UtilityCompanySector } from "../Sector/UtilityCompanySector.model";
import { SectorCreateArg } from "./SectorCreateArg.interface";
import { SectorFabric } from "./SectorFabric.model";

class UtilityCompanySectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new UtilityCompanySector(config);
    }
}

export const utilityCompanySectorFabric = new UtilityCompanySectorFabric();