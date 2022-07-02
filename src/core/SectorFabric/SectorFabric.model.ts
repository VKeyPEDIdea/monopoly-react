import { Sector } from '../Sector/Sector.interface';
import { SectorCreateArg } from './SectorCreateArg.interface';

export abstract class SectorFabric {
    abstract createSector(config: SectorCreateArg): Sector;
}