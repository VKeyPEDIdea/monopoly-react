import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { buySector, payRent, selectTargetSector, sellSector } from "../../features/field/playingFieldSlice";
import { selectCurrentPlayerId, selectPlayerByID } from "../../features/players/playersSlice";
import { BuySectorData } from "../../models/BuySectorData.interface";
import FlipCard from "../FlipCard";
import FaceSideMailCard from "../MailCard/FaceSideMailCard/";
import BackSideCard from "../MailCard/ShirtSideMailCard/";
import RealEstateCard from "../RealEstateCard";

const SectorCardPresenter = () => {
    const {
        id,
        type,
        title,
        color,
        owner,
        price,
        rentPrice,
        houseList,
    } = useAppSelector(selectTargetSector);
    const dispatch = useAppDispatch();
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
    const ownerId = (owner !== undefined) ? owner : null;
    const ownerName = useAppSelector(state => selectPlayerByID(state, ownerId));
    
    let card;

    const buySectorClickHandler = (payload: BuySectorData) => {
        dispatch(buySector(payload));
    };

    const sellSectorClickHandler = (payload: BuySectorData) => {
        dispatch(sellSector(payload));
    };

    const payRentSectorClickHandler = (payload: {
        sectorId: number | null,
        ownerPlayerId: number | null,
        tenantPlayerId: number,    
    }) => {
        dispatch(payRent(payload));
    };

    switch (type) {
        case 'LandPlot':
            const cardData = {
                title,
                ownerName,
                isShowToOwner: currentPlayerId === ownerId,
                price: price ? price : 0,
                color: color ? color : 'blue',
                buildingList: houseList ? houseList : null,
                rentPrice: rentPrice || null,
            };
            const payload = {
                playerId: currentPlayerId,
                sectorId: id || null,
            };
            const payRentPayload = {
                sectorId: id || null,
                ownerPlayerId: ownerId,
                tenantPlayerId: currentPlayerId,            
            };

            card = (
                <RealEstateCard data={cardData} 
                    onSellSectorClick={() => sellSectorClickHandler(payload)}
                    onbuySectorClick={() => buySectorClickHandler(payload)}
                    onPayRentClick={() => payRentSectorClickHandler({ ...payRentPayload })}
                />
            );
            break;
        case 'Chance':
            card = (
                <FlipCard
                    front={
                        <BackSideCard title='Шанс'/>
                    }
                    back={
                        <FaceSideMailCard />
                    } />
            );
            break;
        case 'Bank':
            card = (
                <FlipCard
                    front={
                        <BackSideCard title='Банк'/>
                    }
                    back={
                        <FaceSideMailCard />
                    } />
            );
            break;
    
        default:
            break;
    }

    return (
        <>{card}</>
    );
};

export default SectorCardPresenter;