import { Color } from "./color";
import { SectorType } from "./SectorType.model";

export interface SectorProps {
	isBottom?: boolean;
	title: string;
	price: number;
	color: Color | null;
	type: SectorType;
};