import Sector from 'components/Sector';
import classes from './BottomLine.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    selectTargetSectorId,
    selectBottomLineSectors,
} from 'features/field/selectors';
import { selectCurrentPlayerId } from 'features/players/selectors';
import { moveChipToTargetSector } from 'features/players/reducers';
import getSectorCoordinates from 'utilities/getSectorCoordinates';

const BottomLine = () => {
    const bottomLineSectors = useAppSelector(selectBottomLineSectors);
    const targetSectorId = useAppSelector(selectTargetSectorId);
    const dispatch = useAppDispatch();
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);

    const showCoordinates = (element: HTMLDivElement | null) => {
        const coordinates = getSectorCoordinates(element, 'Bottom');
        dispatch(moveChipToTargetSector({
            currentPlayerId,
            coordinates,
        }));
    };

	const sectorList = bottomLineSectors.map(({
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
			line='Bottom'
			type={type}
            owner={owner}
            getСoordinates={showCoordinates}
            target={targetSectorId === id}
            />;
	});

	return (
		<div className={classes.bottomline}>
			{sectorList}
		</div>
	);
};

export default BottomLine;