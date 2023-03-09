import classes from './Sector.module.scss';
import { Sector as SectorProps } from 'core/Sector/Sector.interface';
import { memo, useEffect, useRef } from 'react';
import ColoredSquare from 'shared/ui/ColoredSquare';

const Sector = memo(({
    id,
	line,
	price,
	title,
	color,
	type,
    target,
    owner,
    currentPlayerId,
    stepCount,
    getСoordinates
}: SectorProps) => {	
    const sector = useRef<HTMLDivElement>(null);
    const ownerId = (owner !== undefined) ? owner : null;
    const isShowToOwner = currentPlayerId === ownerId;
    
    useEffect(() => {
        if (target && getСoordinates) {
            getСoordinates(sector.current);
        }
    }, [target]);

    const sectorStyles = `${classes.sector} ${isShowToOwner ? classes['sector--owner'] : ''}`;

	if (type !== 'LandPlot') {
		return (
			<div ref={sector} className={[type === 'TransportCompany' ? sectorStyles : classes.sector, classes['sector--simple']].join(' ')}
                data-sector-id={id}>
				<p className={classes.title}>{title}</p>
                <p className={[classes['step-count'], classes[`step-count--${line === 'Top' ? 'top' : 'bottom'}`]].join(' ')}>{stepCount}</p>
			</div>
		);
	} else if (line === 'Bottom') {
		return (
			<div ref={sector} className={sectorStyles} data-sector-id={id}>
                <div className={classes['color-box']}>
				    <ColoredSquare color={color ?? 'blue'} />
                </div>
				<div className={classes.meta}>
					<p className={`${classes.title} ${classes['title--bottom']}`}>{title}</p>
					<p className={`${classes.price} ${classes['price--bottom']}`}>{price}</p>
				</div>
                <p className={[classes['step-count'], classes['step-count--bottom']].join(' ')}>{stepCount}</p>
			</div>
		);
	}

	return (
		<div ref={sector} className={sectorStyles} data-sector-id={id}>
			<div className={classes.meta}>
				<p className={classes.price}>{price}</p>
				<p className={classes.title}>{title}</p>
			</div>
            <div className={classes['color-box']}>
                <ColoredSquare color={color ?? 'blue'} />
            </div>
            <p className={[classes['step-count'], classes['step-count--top']].join(' ')}>{stepCount}</p>
		</div>
	);
});

export default Sector;