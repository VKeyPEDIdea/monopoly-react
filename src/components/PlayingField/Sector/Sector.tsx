import classes from './Sector.module.scss';
import { Sector as SectorProps } from '../../../core/Sector/Sector.interface';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setTargetSector } from '../../../features/field/playingFieldSlice';

const Sector = ({
    id,
	line,
	price,
	title,
	color,
	type,
    target,
    getСoordinates
}: SectorProps) => {	
    const sector = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch(); 
    
    useEffect(() => {
        if (target && getСoordinates) {
            getСoordinates(sector.current);
        }
    }, [target]);

    const clickHandler = () => {
        // dispatch(changePlayerLocation({ playerId: 0, locationId: id }));
        dispatch(setTargetSector(id));
    };

	if (type !== 'LandPlot') {
		return (
			<div ref={sector} className={[classes.sector, classes['sector--simple']].join(' ')}
                data-sector-id={id}
                onClick={clickHandler}>
				<p className={classes.title}>{title}</p>
			</div>
		);
	} else if (line === 'Bottom') {
		return (
			<div ref={sector} className={classes.sector} data-sector-id={id} onClick={clickHandler}>
				<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
				<div className={classes.meta}>
					<p className={`${classes.title} ${classes['title--bottom']}`}>{title}</p>
					<p className={`${classes.price} ${classes['price--bottom']}`}>{price}</p>
				</div>
			</div>
		);
	}

	return (
		<div ref={sector} className={classes.sector} data-sector-id={id} onClick={clickHandler}>
			<div className={classes.meta}>
				<p className={classes.price}>{price}</p>
				<p className={classes.title}>{title}</p>
			</div>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
		</div>
	);
};

export default Sector;