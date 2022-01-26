import React, { useRef } from 'react';
import classes from './ExtraDimensionСard.module.scss';

const ExtraDimensionСard = props => {
	const {
		scale = 1.1,
		angle = 2,	
	} = props;
	let bounds;
	const card = useRef(null);
	const glow = useRef(null);
	const content = useRef(null);
    const glowColor1 = '#ffffff11';
    const glowColor2 = '#0000000f';

	function rotateToMouse(e) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		}
		const distance = Math.sqrt(center.x**2 + center.y**2);

		content.current.style.filter = `
			drop-shadow(${-center.x / 5}px ${-center.y / 5}px 4px rgba(0, 0, 0, .10))
		`;
		
		card.current.style.transform = `
			scale3d(${scale}, ${scale}, ${scale})
			rotate3d(
				${center.y / 100},
				${-center.x / 100},
				0,
				${Math.log(distance)* angle}deg
			)
		`;
		
		glow.current.style.backgroundImage = `
			radial-gradient(
				circle at
				${center.x * 2 + bounds.width / 2}px
				${center.y * 2 + bounds.height / 2}px,
				${glowColor1},
				${glowColor2}
			)
		`;
	}

	const onImgMouseEnterHandler = () => {
		bounds = card.current.getBoundingClientRect();
		card.current.addEventListener('mousemove', rotateToMouse);
	};

	const onImgMouseLeaveHandler = () => {
		card.current.removeEventListener('mousemove', rotateToMouse);
		card.current.style.transform = '';
        content.current.style.filter = '';
	};
	
	return(
		<>
			<div className={classes.box}>
				<div className={classes.card}
					ref={card}
					onMouseEnter={onImgMouseEnterHandler}
					onMouseLeave={onImgMouseLeaveHandler}>
					<div className={classes.glow}	ref={glow}>
						<div className={classes.content} ref={content}>
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExtraDimensionСard;