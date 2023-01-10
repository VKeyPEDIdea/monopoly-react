import { useAppSelector } from 'app/hooks';
import { Opportunities } from 'models/Opportunities.interface';
import FlipCard from 'entities/FlipCard';
import FaceSideMailCard from 'entities/MailCard/FaceSideMailCard';
import BackSideCard from 'entities/MailCard/ShirtSideMailCard';
import { setTargetSector } from 'features/field/playingFieldSlice';
import { transferToTarger } from 'features/field/reducers';
import {
    getTargetToTransfer,
    selectFieldIdByName,
    selectRepairPrice
} from 'features/field/selectors';
import { changePlayerBalance, donateForGift } from 'features/players/reducers';
import { useDispatch } from 'react-redux';

interface ChanceBankCardPresenterProps {
    item: Opportunities;
    currentPlayerId: number;
}

interface ChanceAction {
    btnTitle: string;
    details: string;
    action: () => void;
}

const ChanceBankCardPresenter = ({
    item: {
        type,
        chanceTitle,
        detailsText,
        count,
        targetSector,
        isNegative,
        btnText
    },
    currentPlayerId
}: ChanceBankCardPresenterProps) => {
    const dispatch = useDispatch();

    let action: () => void = () => {};
    let btnTitle: string = '';
    let details: string = '';

    const chanceActions: {
        [key: string]: () => ChanceAction | null
    } = {
        balance: () => {
            if (count) {
                return {
                    btnTitle: btnText,
                    details: detailsText,
                    action: () => dispatch(changePlayerBalance({
                        type: isNegative ? 'decrease' : 'increase',
                        payload: {
                            playerId: currentPlayerId,
                            count,
                        }
                    }))
                }
            } else {
                return null;
            }
        },
        'all-players': () => ({
            btnTitle: btnText,
            details: detailsText,
            action: () => dispatch(donateForGift(count || 0, currentPlayerId))
        }),
        prison: () => {
            const fieldId = useAppSelector(state => selectFieldIdByName(state, 'Тюрьма'));
            return {
                btnTitle: btnText,
                details: detailsText,
                action: () => {
                    dispatch(setTargetSector(fieldId));
                    dispatch(transferToTarger({
                        playerId: currentPlayerId,
                        targetSectorId: fieldId ?? 0,
                    }));
                }
            }
        },
        transferToTarget: () => ({
            btnTitle: btnText,
            details: detailsText,
            action: () => {
                dispatch(setTargetSector(targetSector));
                dispatch(transferToTarger({
                    playerId: currentPlayerId,
                    targetSectorId: targetSector || 0,
                }));
            }
        }),
        transferToRandom: () => {
            const {
                id,
                title
            } = useAppSelector(getTargetToTransfer);
            return {
                btnTitle: btnText + title,
                details: detailsText,
                action: () => {
                    dispatch(setTargetSector(id));
                    dispatch(transferToTarger({
                        playerId: currentPlayerId,
                        targetSectorId: id,
                    }));
                }
            }
        },
        expenses: () => {
            const {
                repairPrice,
                houseCount,
                hotelCount
            } = useAppSelector(state => selectRepairPrice(state, currentPlayerId));
            return {
                btnTitle: btnText,
                details: detailsText + `${repairPrice} - стоимость ремонта. Количество домов: ${houseCount}, количество отелей: ${hotelCount}`,
                action: () => dispatch(changePlayerBalance({
                    type: 'decrease',
                    payload: {
                        playerId: currentPlayerId,
                        count: repairPrice,
                    }
                }))
            }
        },
    };

    const chanceAction = chanceActions[type]?.();
    
    if (!chanceAction) {
        return null;
    }

    return (
        <FlipCard
            front={
                <BackSideCard title={chanceTitle}/>
            }
            back={
                <FaceSideMailCard detailsText={details}
                    btn={{
                        clickHandler: action,
                        count: count,
                        negative: isNegative,
                        title: btnTitle,
                    }}
                />
            }
        />
    );
};

export default ChanceBankCardPresenter;