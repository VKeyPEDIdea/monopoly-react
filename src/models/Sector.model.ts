import { Color } from './color.type';
import { SectorType } from "./SectorType.model";

export interface Sector {
	isBottom?: boolean;
	title: string;
	price: number;
	color: Color | null;
	type: SectorType;
    owner: null | number;
};