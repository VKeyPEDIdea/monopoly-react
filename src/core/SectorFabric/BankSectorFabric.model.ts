import { LineType } from "../../models/LineType.type";
import { BankSector } from "../Sector/BankSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorFabric } from "./SectorFabric.model";

class BankSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string): Sector {
        return new BankSector(line, title);
    }
}

export const bankSectorFabric = new BankSectorFabric();