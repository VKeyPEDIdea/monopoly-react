import { HousePointState } from "../../components/HousePoint/HousePointState.type";
import { Color } from "../../models/color.type";
import { LineType } from "../../models/LineType.type";

export interface SectorCreateArg {
    id: number;
    line: LineType;
	title: string;
	price?: number;
    rentPrice?: number;
    housePrice?: number;
    rentPriceListWithHouse?: number[];
	readonly color?: Color | null;
}