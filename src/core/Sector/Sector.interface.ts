import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';
import { Color } from 'models/color.type';
import { LineType } from 'models/LineType.type';
import { SectorType } from './SectorType.model';

export interface Sector {
	id: number;
    line: LineType;
	title: string;
	price?: number;
    rentPrice?: number;
    transferPrice?: number;
    housePrice?: number;
    houseList?: HousePointProps[];
	readonly color?: Color | null;
	type: SectorType;
    owner?: null | number;
    currentPlayerId?: null | number;
    target?: boolean;
    stepCount: number | null;
    getСoordinates?(element: HTMLDivElement | null): void;
};