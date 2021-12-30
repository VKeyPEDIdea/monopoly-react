import Sector from "../Sector";
import classes from './TopLine.module.scss';

const TopLine = () => {
	return (
		<div className={classes.topline}>
			<Sector title='Старт' price={0}/>
			<Sector title='Гапеева' price={60}/>
			<Sector title='Банк' price={0}/>
			<Sector title='Кривогуза' price={60}/>
			<Sector title='Налог с дохода' price={0}/>
			<Sector title='Запад порт' price={0}/>
			<Sector title='Чкалова' price={100}/>
			<Sector title='Шанс' price={0}/>
			<Sector title='Бухар жирау' price={100}/>
			<Sector title='Пушкина' price={120}/>
			<Sector title='Тюрьма' price={0}/>
			<Sector title='Бульвар Мира' price={140}/>
			<Sector title='Электрическая компания' price={0}/>
			<Sector title='Абая' price={140}/>
			<Sector title='Гоголя' price={160}/>
			<Sector title='Cевер порт' price={0}/>
			<Sector title='Ержанова' price={180}/>
			<Sector title='Банк' price={0}/>
			<Sector title='Ермекова' price={180}/>
			<Sector title='Абдирова' price={200}/>
		</div>
	);
};

export default TopLine;