import { Color } from "../../../models/color.type";
import { SectorType } from '../../../core/Sector/SectorType.model';
import { LineType } from '../../../models/LineType.type';

export interface SectorProps {
	line: LineType;
	title: string;
	price: number;
	color: Color | null;
	type: SectorType;
};