import { LandPlotSector } from "../Sector/LandPlotSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorCreateArg } from "./SectorCreateArg.interface";
import { SectorFabric } from "./SectorFabric.model";

class LandPlotSectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new LandPlotSector(config);
    }
}

export const landPlotSectorFabric = new LandPlotSectorFabric();