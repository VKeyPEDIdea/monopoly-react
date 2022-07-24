import { useAppSelector } from 'app/hooks';
import { Opportunities } from 'config/opportunitiesCard.config';
import FlipCard from 'entities/FlipCard';
import FaceSideMailCard from 'entities/MailCard/FaceSideMailCard';
import BackSideCard from 'entities/MailCard/ShirtSideMailCard';
import { setTargetSector } from 'features/field/playingFieldSlice';
import { transferToTarger } from 'features/field/reducers';
import { getTargetToTransfer } from 'features/field/selectors';
import { changePlayerLocation } from 'features/players/playersSlice';
import { changePlayerBalance } from 'features/players/reducers';
import { useDispatch } from 'react-redux';
import getSectorCoordinates from 'utilities/getSectorCoordinates';

interface ChanceBankCardPresenterProps {
    item: Opportunities;
    currentPlayerId: number;
}

const ChanceBankCardPresenter = ({
    item: {
        type,
        chanceTitle,
        detailsText,
        count,
        isNegative,
        btnText
    },
    currentPlayerId
}: ChanceBankCardPresenterProps) => {
    const dispatch = useDispatch();
    let action: () => void = () => {};
    let btnTitle: string = '';
    let details: string = '';

    switch (type) {
        case 'balance':
            if (count) {
                action = () => dispatch(changePlayerBalance({
                    type: isNegative ? 'decrease' : 'increase',
                    payload: {
                        playerId: currentPlayerId,
                        count,
                    }
                }));
                btnTitle = btnText;
                details = detailsText;
            }
            break;
        case 'all-players':
            break;
        case 'prison':
            break;
        case 'transfer':
            const {
                id,
                title
            } = useAppSelector(getTargetToTransfer);
            action = () => {
                dispatch(setTargetSector(id));
                dispatch(transferToTarger({
                    playerId: currentPlayerId,
                    targetSectorId: id,
                }));
            };
            btnTitle = btnText + title;
            details = detailsText;
            break;
        case 'expenses':
            break;
        case 'bonus':
            break;
        default:
            btnTitle = btnText;
            details = detailsText;
            break;
    }

    return (
        <FlipCard
            front={
                <BackSideCard title={chanceTitle}/>
            }
            back={
                <FaceSideMailCard detailsText={detailsText}
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