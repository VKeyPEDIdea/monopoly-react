import { useAppSelector } from 'app/hooks';
import {
    goToPrison,
    payRent,
    transferToPort,
} from 'features/field/reducers';
import { buySector, sellSector } from 'features/field/reducers';
import { selectPlayerByID } from 'features/players/selectors';
import {
    checkIsMonopoly,
    getTransportCompaniesListForCard,
    selectMonopolyByColor,
    selectTargetSector
} from 'features/field/selectors';
import { BuySectorData } from 'models/BuySectorData.interface';
import RealEstateCard from 'entities/RealEstateCard';
import { useDispatch } from 'react-redux';
import MonopolyCard from 'entities/MonopolyCard';
import { BANK_LIST, CHANCE_LIST } from 'config/opportunitiesCard.config';
import { getRandomArrayItem } from 'utilities/getRandomArrayItem';
import ChanceBankCardPresenter from 'entities/ChanceBankCardPresenter';
import ImageCard from 'entities/ImageCard';
import TransportCompanyCard from 'entities/TransportCompanyCard';
import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';

interface SectorCardPresenterProps {
    currentPlayerId: number;
}

const SectorCardPresenter = ({
    currentPlayerId
}: SectorCardPresenterProps) => {
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
    const ownerId = (owner !== undefined) ? owner : null;
    const ownerName = useAppSelector(state => selectPlayerByID(state, ownerId));
    const transportCompanyList = useAppSelector(getTransportCompaniesListForCard);
    const monopolySectorList = useAppSelector(state => selectMonopolyByColor(state, color || 'blue'));
    
    let card;
    let estateList: {title: string, buildingList: HousePointProps[]}[] = [];

    const isMonopoly = useAppSelector(state => checkIsMonopoly(state, id));
    if (isMonopoly) {
        estateList = monopolySectorList.map(({ title, houseList}) => {
            return {
                title: title,
                buildingList: houseList || [{ buildType: 'house', price: 0, state: 'vacant' }],
            }
        });
    }

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

    const cardData = {
        title,
        ownerName,
        isShowToOwner: currentPlayerId === ownerId,
        price: price ? price : 0,
        color: color ? color : null,
        buildingList: houseList ? houseList : null,
        rentPrice: rentPrice || null,
    };

    const buySellPayload = {
        playerId: currentPlayerId,
        sectorId: id || null,
    };

    const payRentPayload = {
        sectorId: id || null,
        ownerPlayerId: ownerId,
        tenantPlayerId: currentPlayerId,            
    };

    switch (type) {
        case 'LandPlot':
            card = (
                isMonopoly
                    ? <MonopolyCard color={color || 'blue'}
                        estateList={estateList}
                        ownerName={ownerName || ''}
                        isShowToOwner={true}/>
                    : <RealEstateCard data={cardData} 
                        onSellSectorClick={() => sellSectorClickHandler(buySellPayload)}
                        onbuySectorClick={() => buySectorClickHandler(buySellPayload)}
                        onPayRentClick={() => payRentSectorClickHandler({ ...payRentPayload })}
                    />
            );
            break;
        case 'TransportCompany':
            const portCardData = {
                title,
                ownerName,
                isShowToOwner: currentPlayerId === ownerId,
                price: price ? price : 0,
                color: color ? color : null,
                rentPrice: rentPrice || null,
                harborList: transportCompanyList,
                currentPlayerId,
            };
            card = (
                <TransportCompanyCard data={portCardData} 
                    onSellSectorClick={() => sellSectorClickHandler(buySellPayload)}
                    onbuySectorClick={() => buySectorClickHandler(buySellPayload)}
                    onPayRentClick={() => payRentSectorClickHandler({ ...payRentPayload })}
                    onTransferClick={transferToPort}
                />
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
        case 'Arrest':
            card = (
                <ImageCard detailsText='Вы арестованы. Проследуйте в свою камеру'
                    imgSrc='/images/cards/arrested.png'
                    btn={{
                        title: 'Придется подчиниться. Но я этого так не оставлю',
                        clickHandler: () => goToPrison(currentPlayerId),
                    }}
                />
            );
            break;
        // case 'TransportCompany':
        //     card = (
        //         <ImageCard detailsText={title}
        //             imgSrc='/images/cards/cargo-ship.png'
        //             btn={{
        //                 title: 'Купить',
        //                 clickHandler: () => console.log('Северный порт'),
        //             }}
        //         />
        //     );
        //     break;
    
        default:
            break;
    }

    return (
        <>{card}</>
    );
};

export default SectorCardPresenter;