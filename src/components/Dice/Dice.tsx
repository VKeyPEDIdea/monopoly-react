// @ts-nocheck
import { useState } from 'react';
import classes from './Dice.module.scss';

const rotation = [
	{ x:   0, y:  0 }, // 1         
	{ x:   0, y: 270 }, // 2
	{ x:   0, y: 180 }, // 3   
	{ x:   0, y:  90 }, // 4
	{ x: 270, y:   0 }, // 5
	{ x:  90, y:   0 }, // 6       
];

const Dice = ({
	d1 = 1,
	d2 = 1,
}) => {
	const [flip, setFlip] = useState(true);

	//  rotation 
	let r1, r2, gOneStyle, dOneStyle, dTwoStyle;
	
	if (flip) {
		gOneStyle = { transform: `rotateY(180deg) rotateX(-30deg)` };            
		r1 = rotation[d2 - 1];
		r2 = rotation[d1 - 1];        
	} else {
		gOneStyle = { transform: `rotateX(30deg)` };                      
		r1 = rotation[d1 - 1];
		r2 = rotation[d2 - 1];        
	}
		
	dOneStyle = { transform: `rotateX(${r1.x}deg) rotateY(${r1.y}deg) rotateY(${flip?-180:0}deg)`};
	dTwoStyle = { transform: `rotateX(${r2.x}deg) rotateY(${r2.y}deg) rotateY(${flip?-180:0}deg)`};

	return (
		<div className={classes.stage}>
			<div className={[classes.group, classes.g1].join(' ')} style={gOneStyle} onClick={() => setFlip(!flip)}>
				<div className={[classes.dice, classes.d1].join(' ')} style={dOneStyle}>
					<div className={[classes.face, classes['num-1']].join(' ')}></div>
					<div className={[classes.face, classes['num-2']].join(' ')}></div>
					<div className={[classes.face, classes['num-3']].join(' ')}></div>
					<div className={[classes.face, classes['num-4']].join(' ')}></div>
					<div className={[classes.face, classes['num-5']].join(' ')}></div>            
					<div className={[classes.face, classes['num-6']].join(' ')}></div>
				</div>
				<div className={[classes.dice, classes.d2].join(' ')} style={dTwoStyle}>
					<div className={[classes.face, classes['num-1']].join(' ')}></div>
					<div className={[classes.face, classes['num-2']].join(' ')}></div>
					<div className={[classes.face, classes['num-3']].join(' ')}></div>
					<div className={[classes.face, classes['num-4']].join(' ')}></div>
					<div className={[classes.face, classes['num-5']].join(' ')}></div>
					<div className={[classes.face, classes['num-6']].join(' ')}></div>
				</div>   
			</div>
		</div>
	);
};

export default Dice;