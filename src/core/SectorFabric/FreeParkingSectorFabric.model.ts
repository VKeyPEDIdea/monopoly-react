import { FreeParkingSector } from '../Sector/FreeParkingSector.model';
import { Sector } from '../Sector/Sector.interface';
import { SectorCreateArg } from './SectorCreateArg.interface';
import { SectorFabric } from './SectorFabric.model';

class FreeParkingSectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new FreeParkingSector(config);
    }
}

export const freeParkingSectorFabric = new FreeParkingSectorFabric();