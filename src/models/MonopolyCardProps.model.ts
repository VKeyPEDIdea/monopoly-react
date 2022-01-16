import { Color } from "./color";
import { RealEstate } from "./RealEstate.model";

export interface MonopolyCardProps {
	color: Color;
	estateList: RealEstate[];
	ownerName: string;
};