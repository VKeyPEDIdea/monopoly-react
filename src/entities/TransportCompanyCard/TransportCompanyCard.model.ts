import { Color } from 'models/color.type';

interface Harbor {
    id: number;
    title: string;
    transferPrice: number;
}

export interface TransportCompanyCardProps {
    data: {
        color: Color | null;
        title: string;
        price: number;
        rentPrice: number | null;
        ownerName: string | null;
        isShowToOwner: boolean;
        harborList: Array<Harbor>;
    }
    onbuySectorClick(): void;
    onSellSectorClick(): void;
    onPayRentClick(): void;
    onTransferClick(targetSectorId: number, transferPrice: number): void;
}