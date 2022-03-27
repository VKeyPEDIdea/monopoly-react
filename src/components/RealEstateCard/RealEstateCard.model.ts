import { Color } from "../../models/color.type";
import { HousePointProps } from "../HousePoint/HousePoint.model";

export interface RealEstateCardProps {
	buildingList: HousePointProps[];
	color: Color | null;
	title: string;
	ownerName: string | null;
}