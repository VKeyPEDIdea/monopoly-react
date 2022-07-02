import { useState } from 'react';
import classes from './Dice.module.scss';

interface DiceProps {
    onRollDice: ([diceOneValue, diceTwoValue]: [number, number]) => void;
}

const rotation = [
	{ x:   0, y:  0 }, // 1         
	{ x:   0, y: 270 }, // 2
	{ x:   0, y: 180 }, // 3   
	{ x:   0, y:  90 }, // 4
	{ x: 270, y:   0 }, // 5
	{ x:  90, y:   0 }, // 6       
	{ x: 270, y:   0 }, // 5       
];

const getRotation = (d1: number, d2: number, flip: boolean): [r1: { x: number, y: number }, r2: { x: number, y: number }] => {
    let r1;
    let r2;       
    
    if (flip) {
        if (d2 === 5 || d2 === 6) {
            r1 = rotation[d2];
            r2 = rotation[(d1 === 6 || d1 === 5) ? d1 : d1 - 1];
        } else if (d1 === 6 || d1 === 5) {
            r1 = rotation[d2 - 1];
            r2 = rotation[d1];
        } else {
            r1 = rotation[d2 - 1];
            r2 = rotation[d1 - 1];
        }
    } else {
        r1 = rotation[d2 - 1];
        r2 = rotation[d1 - 1];        
    }

    return [r1, r2]; 
};

const faceNumbers = [1, 2, 3, 4, 5, 6];
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

const Dice = ({
    onRollDice
}: DiceProps) => {
	const [flip, setFlip] = useState(true);
	const [d1, setD1] = useState(1);
	const [d2, setD2] = useState(1);
	const [color1, setColor1] = useState('red');
	const [color2, setColor2] = useState('blue');

	function rollTheDice() {
		setFlip(!flip);
        const diceOneValue = getRandomInt(1, 7);
        const diceTwoValue = getRandomInt(1, 7);
		setD1(diceOneValue);
		setD2(diceTwoValue);
		setColor1(colors[getRandomInt(0, 5)]);
		setColor2(colors[getRandomInt(0, 5)]);
        onRollDice([diceOneValue, diceTwoValue]);
	};

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
    }

    const [r1, r2] = getRotation(d1, d2, flip); 

	const dOneStyle = { transform: `rotateX(${r1.x}deg) rotateY(${r1.y}deg) rotateY(${flip?-180:0}deg)`};
	const dTwoStyle = { transform: `rotateX(${r2.x}deg) rotateY(${r2.y}deg) rotateY(${flip?-180:0}deg)`};

    const diceOneFaces = faceNumbers.map((num, index)=> {
        return <div key={'dice-face-' + index}
            className={[
                classes.face,
                classes[`face--${color1}`],
                classes[`num-${num}`]
            ].join(' ')}
        ></div>;
    });

    const diceTwoFaces = faceNumbers.map((num, index) => {
        return <div key={'dice-face-' + index}
            className={[
                classes.face,
                classes[`face--${color2}`],
                classes[`num-${num}`]
            ].join(' ')}
        ></div>;
    });

	return (
		<div className={classes.stage}>
			<div className={[flip ? classes['group-flip'] : classes.group, classes.g1].join(' ')}
				onClick={rollTheDice}>
				<div className={[classes.dice, classes.d1].join(' ')} style={dOneStyle}>
                    {diceOneFaces}
				</div>
				<div className={[classes.dice, classes.d2].join(' ')} style={dTwoStyle}>
                    {diceTwoFaces}
				</div>   
			</div>
		</div>
	);
};

export default Dice;