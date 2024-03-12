import { Sector } from '../Sector/Sector.interface';
import { TrapSector } from '../Sector/TrapSector.model';
import { SectorCreateArg } from './SectorCreateArg.interface';
import { SectorFabric } from './SectorFabric.model';

class TrapSectorFabric extends SectorFabric {
  createSector(config: SectorCreateArg): Sector {
    return new TrapSector(config);
  }
}

export const trapSectorFabric = new TrapSectorFabric();
