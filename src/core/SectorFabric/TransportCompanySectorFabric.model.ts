import { LineType } from "../../models/LineType.type";
import { Sector } from "../Sector/Sector.interface";
import { TransportCompanySector } from "../Sector/TransportCompanySector.model";
import { SectorFabric } from "./SectorFabric.model";

class TransportCompanySectorFabric extends SectorFabric {
    createSector(line: LineType, title: string, price: number): Sector {
        return new TransportCompanySector(line, title, price);
    }
}

export const transportCompanySectorFabric = new TransportCompanySectorFabric();