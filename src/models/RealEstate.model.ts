import { HousePointProps } from '../entities/HousePoint/HousePoint.model';

export interface RealEstate {
	buildingList: HousePointProps[];
	title: string;
}