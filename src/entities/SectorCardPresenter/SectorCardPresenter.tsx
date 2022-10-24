import { useAppSelector } from 'app/hooks';
import { payRent, transferToTarger } from 'features/field/reducers';
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
import RealEstateCard from 'entities/RealEstateCard';
import { useDispatch } from 'react-redux';
import MonopolyCard from 'entities/MonopolyCard';
import { BANK_LIST, CHANCE_LIST } from 'config/opportunitiesCard.config';
import { getRandomArrayItem } from 'utilities/getRandomArrayItem';
import ChanceBankCardPresenter from 'entities/ChanceBankCardPresenter';
import ImageCard from 'entities/ImageCard';
import { setTargetSector } from 'features/field/playingFieldSlice';
import TransportCompanyCard from 'entities/TransportCompanyCard';

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

    const goToPrison = () => {
        dispatch(setTargetSector(10));
        dispatch(transferToTarger({
            playerId: currentPlayerId,
            targetSectorId: 10,
        }));
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

    const payload = {
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
        case 'TransportCompany':
            card = (
                <TransportCompanyCard data={cardData} 
                    onSellSectorClick={() => sellSectorClickHandler(payload)}
                    onbuySectorClick={() => buySectorClickHandler(payload)}
                    onPayRentClick={() => payRentSectorClickHandler({ ...payRentPayload })}
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
                        clickHandler: () => goToPrison(),
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