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
	{ x: 270, y:   0 }, // 5       
];

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

const Dice = () => {
	const [flip, setFlip] = useState(true);
	const [d1, setD1] = useState(1);
	const [d2, setD2] = useState(1);
	const [color1, setColor1] = useState('red');
	const [color2, setColor2] = useState('blue');
	let r1, r2;

	function rollTheDice() {
		setFlip(!flip);
		setD1(getRandomInt(1, 7));
		setD2(getRandomInt(1, 7));
		setColor1(colors[getRandomInt(0, 6)]);
		setColor2(colors[getRandomInt(0, 6)]);
	};

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	  }
	
	if (flip) {
		r1 = rotation[(d2 === 5 || d2 === 6) ? d2 : d2 - 1];
		r2 = rotation[(d2 === 5 || d2 === 6) ? d1 : d1 - 1];        
	} else {
		r1 = rotation[d2 - 1];
		r2 = rotation[d1 - 1];        
	}
		
	const dOneStyle = { transform: `rotateX(${r1.x}deg) rotateY(${r1.y}deg) rotateY(${flip?-180:0}deg)`};
	const dTwoStyle = { transform: `rotateX(${r2.x}deg) rotateY(${r2.y}deg) rotateY(${flip?-180:0}deg)`};

	return (
		<div className={classes.stage}>
			<div className={[flip ? classes['group-flip'] : classes.group, classes.g1].join(' ')}
				onClick={rollTheDice}>
				<div className={[classes.dice, classes.d1].join(' ')} style={dOneStyle}>
					<div className={[classes.face, classes[`face--${color1}`], classes['num-1']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color1}`], classes['num-2']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color1}`], classes['num-3']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color1}`], classes['num-4']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color1}`], classes['num-5']].join(' ')}></div>            
					<div className={[classes.face, classes[`face--${color1}`], classes['num-6']].join(' ')}></div>
				</div>
				<div className={[classes.dice, classes.d2].join(' ')} style={dTwoStyle}>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-1']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-2']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-3']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-4']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-5']].join(' ')}></div>
					<div className={[classes.face, classes[`face--${color2}`], classes['num-6']].join(' ')}></div>
				</div>   
			</div>
		</div>
	);
};

export default Dice;