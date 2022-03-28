import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { buySector, selectTargetSector, sellSector } from "../../features/field/playingFieldSlice";
import { selectCurrentPlayerId, selectPlayerByID } from "../../features/players/playersSlice";
import { BuySectorData } from "../../models/BuySectorData.interface";
import RealEstateCard from "../RealEstateCard";

const SectorCardPresenter = () => {
    const {
        id,
        type,
        title,
        color,
        owner,
        price,
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
    }

    switch (type) {
        case 'LandPlot':
            const cardData = {
                title,
                ownerName,
                isShowToOwner: currentPlayerId === ownerId,
                price: price ? price : 0,
                color: color ? color : 'blue',
                buildingList: houseList ? houseList : null,
            };
            const payload = {
                playerId: currentPlayerId,
                sectorId: id || null,
            };

            card = (
                <RealEstateCard data={cardData} 
                    onSellSectorClick={() => sellSectorClickHandler(payload)}
                    onbuySectorClick={() => buySectorClickHandler(payload)}
                />
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