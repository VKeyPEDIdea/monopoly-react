import { Opportunities } from 'models/Opportunities.interface';
import FlipCard from 'entities/FlipCard';
import FaceSideMailCard from 'entities/MailCard/FaceSideMailCard';
import BackSideCard from 'entities/MailCard/ShirtSideMailCard';
import getChanceActions from './getChanceAction';

interface ChanceBankCardPresenterProps {
    item: Opportunities;
    currentPlayerId: number;
}

const ChanceBankCardPresenter = ({
    item: {
        type,
        btnText,
        detailsText,
        count,
        isNegative,
        chanceTitle,
        targetSector,
    },
    currentPlayerId
}: ChanceBankCardPresenterProps) => {
    const actionConfig = {
        type,
        btnText,
        detailsText,
        count,
        isNegative,
        targetSector,
        currentPlayerId
    }
    const chanceAction = getChanceActions(actionConfig);
    
    let {
        btnTitle = '',
        action = () => {},
        details = ''
    } = chanceAction || {};
    
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