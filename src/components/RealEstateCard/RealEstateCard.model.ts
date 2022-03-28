import { Color } from "../../models/color.type";
import { HousePointProps } from "../HousePoint/HousePoint.model";

export interface RealEstateCardProps {
	buildingList: HousePointProps[] | null;
	color: Color | null;
	title: string;
    price: number;
	ownerName: string | null;
}