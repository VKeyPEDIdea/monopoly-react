import { Color } from 'models/color.type';

interface Harbor {
    id: number;
    title: string;
    transferPrice: number;
    owner: number | null;
}

export interface TransportCompanyCardProps {
    data: {
        color: Color | null;
        title: string;
        price: number;
        rentPrice: number | null;
        ownerName: string | null;
        isShowToOwner: boolean;
        currentPlayerId: number;
        harborList: Array<Harbor>;
    }
    onbuySectorClick(): void;
    onSellSectorClick(): void;
    onPayRentClick(): void;
    onTransferClick(
        targetSectorId: number,
        transferPrice: number,
        owner: number | null,
        playerId: number,
    ): void;
}