import { Color } from '../../models/color.type';
import { LineType } from '../../models/LineType.type';
import { SectorType } from "./SectorType.model";

export interface Sector {
	line: LineType;
	title: string;
	price?: number;
	readonly color?: Color | null;
	type: SectorType;
    owner?: null | number;
};