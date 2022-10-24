import { Color } from 'models/color.type';

export interface TransportCompanyCardProps {
    data: {
        color: Color | null;
        title: string;
        price: number;
        rentPrice: number | null;
        ownerName: string | null;
        isShowToOwner: boolean;
    }
    onbuySectorClick(): void;
    onSellSectorClick(): void;
    onPayRentClick(): void;
}