import { useAppSelector } from "../../app/hooks";
import { selectTargetSector } from "../../features/field/playingFieldSlice";
import { selectPlayerByID } from "../../features/players/playersSlice";
import RealEstateCard from "../RealEstateCard";

const SectorCardPresenter = () => {
    const sector = useAppSelector(selectTargetSector) || null;
    let card;

    if (sector) {
        switch (sector.type) {
            case 'LandPlot':
                const {
                    title,
                    color,
                    owner,
                    price,
                    houseList,
                } = sector;

                const ownerName = owner ? useAppSelector(state => selectPlayerByID(state, owner)) : '';

                card = <RealEstateCard title={title}
                    price={price ? price : 0}
                    color={color ? color : 'blue'}
                    ownerName={ownerName}
                    buildingList={houseList ? houseList : null}/>
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