import { Sector } from 'core/Sector/Sector.interface';
import { ArrestSector } from 'core/Sector/ArrestSector.model';
import { SectorCreateArg } from './SectorCreateArg.interface';
import { SectorFabric } from './SectorFabric.model';

class ArrestSectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new ArrestSector(config);
    }
}

export const arrestSectorFabric = new ArrestSectorFabric();