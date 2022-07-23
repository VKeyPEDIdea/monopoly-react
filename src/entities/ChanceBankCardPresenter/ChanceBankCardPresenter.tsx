import { Opportunities } from 'config/opportunitiesCard.config';
import FlipCard from 'entities/FlipCard';
import FaceSideMailCard from 'entities/MailCard/FaceSideMailCard';
import BackSideCard from 'entities/MailCard/ShirtSideMailCard';
import { changePlayerBalance } from 'features/players/reducers';
import { useDispatch } from 'react-redux';

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
    switch (type) {
        case 'balance':
            action = () => dispatch(changePlayerBalance({
                type: isNegative ? 'decrease' : 'increase',
                payload: {
                    playerId: currentPlayerId,
                    count,
                }
            }));
            break;
        case 'all-players':
            break;
        case 'prison':
            break;
        case 'transfer': 
            break;
        case 'expenses':
            break;
        case 'bonus':
            break;
        default:
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
                        title: btnText
                    }}
                />
            }
        />
    );
};

export default ChanceBankCardPresenter;