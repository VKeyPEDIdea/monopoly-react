import { Color } from "./color";
import { HousePointProps } from "./HousePoint.model";

export interface RealEstateCardProps {
	buildingList: HousePointProps[];
	color: Color;
	title: string;
	ownerName: string;
}