import { useAppSelector } from 'app/hooks';
import { payRent } from 'features/field/reducers';
import {
    buySector,
    sellSector,
} from 'features/field/reducers';
import {
    selectCurrentPlayerId,
    selectPlayerByID
} from 'features/players/selectors';
import { selectTargetSector } from 'features/field/selectors';
import { BuySectorData } from 'models/BuySectorData.interface';
import FlipCard from 'entities/FlipCard';
import FaceSideMailCard from 'entities/MailCard/FaceSideMailCard';
import BackSideCard from 'entities/MailCard/ShirtSideMailCard';
import RealEstateCard from 'entities/RealEstateCard';
import { useDispatch } from 'react-redux';
import MonopolyCard from 'entities/MonopolyCard';
import { BANK_LIST, CHANCE_LIST } from 'config/opportunitiesCard.config';
import { getRandomArrayItem } from 'utilities/getRandomArrayItem';
import { decreasePlayersCashCount, increasePlayersCashCount } from 'features/players/playersSlice';
import ChanceBankCardPresenter from 'entities/ChanceBankCardPresenter';

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
    const dispatch = useDispatch();
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
                // <MonopolyCard color='red' estateList={[
                //     { title: 'Царство', buildingList: houseList || []},
                //     { title: 'Царство', buildingList: houseList || []},
                //     { title: 'Царство', buildingList: houseList || []},
                // ]} ownerName='Паша' isShowToOwner={false}/>
            );
            break;
        case 'Chance':
            const chance = getRandomArrayItem(CHANCE_LIST);
            card = (
                <ChanceBankCardPresenter 
                    item={chance}
                    currentPlayerId={currentPlayerId}
                />
            );
            break;
        case 'Bank':
            const bank = getRandomArrayItem(BANK_LIST);
            card = (
                <ChanceBankCardPresenter 
                    item={bank}
                    currentPlayerId={currentPlayerId}
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