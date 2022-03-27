import { useAppSelector } from "../../app/hooks";
import { selectTargetSector } from "../../features/field/playingFieldSlice";
import { selectPlayerByID } from "../../features/players/playersSlice";
import RealEstateCard from "../RealEstateCard";
import { realEstateExampleConfig } from "../RealEstateCard/realEstateExample.config";

const SectorCardPresenter = () => {
    const sector = useAppSelector(selectTargetSector) || null;
    let card;

    if (sector) {
        switch (sector.type) {
            case 'LandPlot':
                const {
                    title,
                    color,
                    owner
                } = sector;

                const ownerName = owner ? useAppSelector(state => selectPlayerByID(state, owner)) : '';

                card = <RealEstateCard title={title}
                    color={color ? color : 'blue'}
                    ownerName={ownerName}
                    buildingList={realEstateExampleConfig}/>
                break;
        
            default:
                break;
        }
    }

    return (
        <>{card}</>
    );
};

export default SectorCardPresenter;