import { SectorCreateArg } from 'core/SectorFabric/SectorCreateArg.interface';
import { SectorFabric } from 'core/SectorFabric/SectorFabric.model';
import { PrisonSector } from 'core/Sector/PrisonSector.model';
import { Sector } from '../Sector/Sector.interface';

class PrisonSectorFabric extends SectorFabric {
  createSector(config: SectorCreateArg): Sector {
    return new PrisonSector(config);
  }
}

export const prisonSectorFabric = new PrisonSectorFabric();
