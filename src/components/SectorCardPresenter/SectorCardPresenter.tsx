import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { buySector, selectTargetSector } from "../../features/field/playingFieldSlice";
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
        console.log(payload);
        dispatch(buySector(payload));
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
            };
            const payload = {
                playerId: currentPlayerId,
                sectorId: id || null,
            };

            card = (
                <RealEstateCard data={cardData} 
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