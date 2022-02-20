import { PlayerChip as PlayerChipProps } from './PlayerChip.interface';
import classes from './PlayerChip.module.scss'; 

const RADIUS = 16;

const PlayerChip = ({
    coordinates: { x, y },
    name,
    isCurrent
}: PlayerChipProps) => {
    const placementStyles = {
        left: `${x ? x - RADIUS : RADIUS}px`,
        top: `${y ? y - RADIUS : RADIUS}px`,
    };

    return (
        <div className={[
                classes.chip,
                'chips',
                isCurrent ? classes['chip--current'] : '',
            ].join(' ')}
            style={placementStyles}>
                {name.slice(0, 1)}
        </div>
    );
};

export default PlayerChip;