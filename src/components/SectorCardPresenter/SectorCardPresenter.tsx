import { useAppDispatch, useAppSelector } from 'app/hooks';
import { payRent } from 'features/field/actions';
import {
    buySector,
    sellSector,
} from 'features/field/actions';
import {
    selectCurrentPlayerId,
    selectPlayerByID
} from 'features/players/playersSlice';
import { selectTargetSector } from 'features/field/selectors';
import { BuySectorData } from 'models/BuySectorData.interface';
import FlipCard from 'components/FlipCard';
import FaceSideMailCard from 'components/MailCard/FaceSideMailCard';
import BackSideCard from 'components/MailCard/ShirtSideMailCard';
import RealEstateCard from 'components/RealEstateCard';

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