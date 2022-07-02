import { Sector } from '../Sector/Sector.interface';
import { TransportCompanySector } from '../Sector/TransportCompanySector.model';
import { SectorCreateArg } from './SectorCreateArg.interface';
import { SectorFabric } from './SectorFabric.model';

class TransportCompanySectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new TransportCompanySector(config);
    }
}

export const transportCompanySectorFabric = new TransportCompanySectorFabric();