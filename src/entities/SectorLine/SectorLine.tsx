import Sector from 'entities/Sector';
import { Sector as SectorProps } from 'core/Sector/Sector.interface';
import classes from './SectorLine.module.scss';
import { useAppSelector } from 'app/hooks';
import { selectStepsCountBySectorId } from 'features/field/selectors';
import { selectCurrentPlayerId } from 'features/players/selectors';

const SectorLine = ({
    list,
    target: end,
    position,
    getСoordinates,
}: {
    list: SectorProps[],
    target: number,
    position: 'Top' | 'Bottom',
    getСoordinates(element: HTMLDivElement | null): void;
}) => {
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);
	
    const sectorList = list.map(({
		id,
        title,
		color,
		price,
		type,
        owner,
	}, index) => {
		return <Sector key={'sector' + index}
            id={id}
			title={title}
			price={price}
			color={color}
            line={position}
			type={type}
            owner={owner}
            currentPlayerId={currentPlayerId}
            getСoordinates={getСoordinates}
            target={end === id}
            stepCount={useAppSelector(state => selectStepsCountBySectorId(state, id))}
        />;
	});

	
	return (
		<div className={position === 'Top' ? classes.top : classes.bottom}>
			{sectorList}
		</div>
	);
};

export default SectorLine;