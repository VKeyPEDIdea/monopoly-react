import { Sector } from '../Sector/Sector.interface';
import { StartSector } from '../Sector/StartSector.model';
import { SectorCreateArg } from './SectorCreateArg.interface';
import { SectorFabric } from './SectorFabric.model';

class StartSectorFabric extends SectorFabric {
  createSector(config: SectorCreateArg): Sector {
    return new StartSector(config);
  }
}

export const startSectorFabric = new StartSectorFabric();
