import Sector from 'entities/Sector';
import { Sector as SectorProps } from 'core/Sector/Sector.interface';
import classes from './SectorLine.module.scss';

const SectorLine = ({
    list,
    target,
    position,
    getСoordinates,
}: {
    list: SectorProps[],
    target: number,
    position: 'Top' | 'Bottom',
    getСoordinates(element: HTMLDivElement | null): void;
}) => {
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
            getСoordinates={getСoordinates}
            target={target === id}
        />;
	});
	
	return (
		<div className={position === 'Top' ? classes.top : classes.bottom}>
			{sectorList}
		</div>
	);
};

export default SectorLine;