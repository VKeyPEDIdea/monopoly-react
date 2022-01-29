import { Color } from "../../models/color.type";
import { HousePointProps } from "../HousePoint/HousePoint.model";

export interface RealEstateCardProps {
	buildingList: HousePointProps[];
	color: Color;
	title: string;
	ownerName: string;
}