import { Color } from "../../../models/color.type";
import { SectorType } from "./SectorType.model";

export interface SectorProps {
	isBottom?: boolean;
	title: string;
	price: number;
	color: Color | null;
	type: SectorType;
};