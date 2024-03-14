import { SectorCreateArg } from 'core/SectorFabric/SectorCreateArg.interface';
import { SectorFabric } from 'core/SectorFabric/SectorFabric.model';
import { TaxSector } from 'core/Sector/TaxSector.model';
import { Sector } from '../Sector/Sector.interface';

class TaxSectorFabric extends SectorFabric {
  createSector(config: SectorCreateArg): Sector {
    return new TaxSector(config);
  }
}

export const taxSectorFabric = new TaxSectorFabric();
