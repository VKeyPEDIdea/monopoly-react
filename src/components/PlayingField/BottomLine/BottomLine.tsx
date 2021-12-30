import Sector from "../Sector";
import classes from './BottomLine.module.scss';

const BottomLine = () => {
	return (
		<div className={classes.bottomline}>
			<Sector isBottom={true} title='Гостиничный комплекс' price={400}/>
			<Sector isBottom={true} title='Дорогая покупка' price={0}/>
			<Sector isBottom={true} title='Курорт зона' price={350}/>
			<Sector isBottom={true} title='Шанс' price={0}/>
			<Sector isBottom={true} title='Южный порт' price={0}/>
			<Sector isBottom={true} title='Авиакомпания' price={320}/>
			<Sector isBottom={true} title='Банк' price={0}/>
			<Sector isBottom={true} title='Железная дорога' price={300}/>
			<Sector isBottom={true} title='Морские перевозки' price={300}/>
			<Sector isBottom={true} title='Арест' price={0}/>
			<Sector isBottom={true} title='Сотовая связь' price={280}/>
			<Sector isBottom={true} title='Водопровродная компания' price={0}/>
			<Sector isBottom={true} title='Интернет' price={260}/>
			<Sector isBottom={true} title='Компьютеры' price={260}/>
			<Sector isBottom={true} title='Восток порт' price={0}/>
			<Sector isBottom={true} title='Ресторан' price={240}/>
			<Sector isBottom={true} title='Ночной клуб' price={220}/>
			<Sector isBottom={true} title='Шанс' price={0}/>
			<Sector isBottom={true} title='Бар' price={220}/>
			<Sector isBottom={true} title='бесплатная парковка' price={0}/>
		</div>
	);
};

export default BottomLine;