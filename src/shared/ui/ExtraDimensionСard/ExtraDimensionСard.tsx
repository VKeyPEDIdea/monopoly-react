import React, { useRef } from 'react';
import classes from './ExtraDimensionСard.module.scss';

interface ExtraDimensionСardProps {
    scale?: number;
    angle?: number;
    children: React.ReactNode;
}

const ExtraDimensionСard = ({
    scale = 1.1,
    angle = 2,
    children 
}: ExtraDimensionСardProps) => {
	let bounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
	const card = useRef<HTMLDivElement>(null);
	const glow = useRef<HTMLDivElement>(null);
	const content = useRef<HTMLDivElement>(null);
    const glowColor1 = '#ffffff11';
    const glowColor2 = '#0000000f';

	function rotateToMouse(e: MouseEvent): void {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		}
		const distance = Math.sqrt(center.x**2 + center.y**2);

        if (null !== content.current) {
            content.current.style.filter = `
                drop-shadow(${-center.x / 5}px ${-center.y / 5}px 4px rgba(0, 0, 0, .10))
            `;
        }
		
        if (null !== card.current) {
            card.current.style.transform = `
                scale3d(${scale}, ${scale}, ${scale})
                rotate3d(
                    ${center.y / 100},
                    ${-center.x / 100},
                    0,
                    ${Math.log(distance)* angle}deg
                )
            `;
        }
		
        if (null !== glow.current) {
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
	}

	const onImgMouseEnterHandler = () => {
        if (null !== card.current) {
            bounds = card.current.getBoundingClientRect();
            card.current.addEventListener('mousemove', rotateToMouse);
        }
	};

	const onImgMouseLeaveHandler = () => {
        if (null !== card.current && null !== content.current) {
            card.current.removeEventListener('mousemove', rotateToMouse);
            card.current.style.transform = '';
            content.current.style.filter = '';
        }
	};
	
	return (
		<>
			<div className={classes.box}>
				<div className={classes.card}
					ref={card}
					onMouseEnter={onImgMouseEnterHandler}
					onMouseLeave={onImgMouseLeaveHandler}>
					<div className={classes.glow} ref={glow}>
						<div className={classes.content} ref={content}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExtraDimensionСard;