import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";
import { FreeParkingSector } from "../Sector/FreeParkingSector.model";
import { Sector } from "../Sector/Sector.interface";
import { SectorFabric } from "./SectorFabric.model";

class FreeParkingSectorFabric extends SectorFabric {
    createSector(line: LineType, title: string, price: number, color: Color): Sector {
        return new FreeParkingSector(line, title, price);
    }
}

export const freeParkingSectorFabric = new FreeParkingSectorFabric();