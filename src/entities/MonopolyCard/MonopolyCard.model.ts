import { Color } from '../../models/color.type';
import { RealEstate } from '../../models/RealEstate.model';

export interface MonopolyCardProps {
  color: Color;
  estateList: RealEstate[];
  ownerName: string;
  rentPrice: number;
  housePrice: number;
  isShowToOwner: boolean;
  onPayRentClick: () => void;
  onBuyHouseClick: () => void;
  onDemolishHouseClick: () => void;
}
