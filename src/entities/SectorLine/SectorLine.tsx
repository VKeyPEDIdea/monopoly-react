import Sector from 'entities/Sector';
import { Sector as SectorProps } from 'core/Sector/Sector.interface';
import classes from './SectorLine.module.scss';
import { useAppSelector } from 'app/hooks';
import { selectStepsCountBySectorId } from 'features/field/selectors';
import { selectCurrentPlayerId } from 'features/players/selectors';

const SectorLine = ({
    list,
    target,
    position,
    getCoordinates,
}: {
    list: SectorProps[],
    target: number,
    position: 'Top' | 'Bottom',
    getCoordinates(element: HTMLDivElement | null): void;
}) => {
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
    const stepsCountBySectorId = (id: number) => {
        return useAppSelector(state => selectStepsCountBySectorId(state, id));
    };
	
    const sectorList = list.map(({
		id,
        title,
		color,
		price,
		type,
        owner,
	}) => {
		return <Sector key={'sector' + id + title}
            id={id}
			title={title}
			price={price}
			color={color}
            line={position}
			type={type}
            owner={owner}
            currentPlayerId={currentPlayerId}
            getСoordinates={getCoordinates}
            target={target === id}
            stepCount={stepsCountBySectorId(id)}
        />;
	});

	return (
		<div className={position === 'Top' ? classes.top : classes.bottom}>
			{sectorList}
		</div>
	);
};

export default SectorLine;