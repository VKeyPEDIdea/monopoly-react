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
            );
            break;
        case 'Chance':
            card = (
                <FlipCard
                    front={
                        <BackSideCard title='Шанс'/>
                    }
                    back={
                        <FaceSideMailCard detailsText="Оплатите услуги доктора"
                            btn={{
                                clickHandler: () => console.log('Оплата'),
                                count: '-50',
                                negative: true,
                                title: 'Оплатите'
                            }}
                        />
                    }
                />
            );
            break;
        case 'Bank':
            card = (
                <FlipCard
                    front={
                        <BackSideCard title='Банк'/>
                    }
                    back={
                        <FaceSideMailCard detailsText="Оплатите услуги доктора"
                            btn={{
                                clickHandler: () => console.log('Оплата'),
                                count: '-50',
                                negative: true,
                                title: 'Оплатите'
                            }}
                        />
                    }
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