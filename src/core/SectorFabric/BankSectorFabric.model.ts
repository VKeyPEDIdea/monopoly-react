import { BankSector } from "../Sector/BankSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorCreateArg } from "./SectorCreateArg.interface";
import { SectorFabric } from "./SectorFabric.model";

class BankSectorFabric extends SectorFabric {
    createSector(config: SectorCreateArg): Sector {
        return new BankSector(config);
    }
}

export const bankSectorFabric = new BankSectorFabric();