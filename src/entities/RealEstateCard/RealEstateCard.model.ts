import { Color } from 'models/color.type';
import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';

export interface RealEstateCardProps {
  data: {
    buildingList: HousePointProps[] | null;
    color: Color | null;
    title: string;
    price: number;
    rentPrice: number | null;
    ownerName: string | null;
    isShowToOwner: boolean;
  };
  onbuySectorClick(): void;
  onSellSectorClick(): void;
  onPayRentClick(): void;
}
