import HousePoint from '../HousePoint';
import NameBadge from '../NameBadge';
import classes from './MonopolyCard.module.scss';

const MonopolyCard = () => {
	const color = 'green';

	return (
		<div className={classes.card}>
			<div className={classes.owner}>
				<NameBadge name={'ownerName'}/>
			</div>
			<div className={`${classes.color} ${classes[`color--${color}`]}`}></div>
			<div className={classes.content}>
				<p className={classes.title}>Монополия</p>

				<div className={classes.sector}>
					<p className={classes.subheading}>Чкалова</p>
					<div className={classes.street}>
						<div className={classes.point}>
							<HousePoint state='acquired' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='hotel' />
						</div>
					</div>
				</div>

				<div className={classes.sector}>
					<p className={classes.subheading}>Бухар жирау</p>
					<div className={classes.street}>
					<div className={classes.point}>
							<HousePoint state='acquired' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='hotel' />
						</div>
					</div>
				</div>

				<div className={classes.sector}>
					<p className={classes.subheading}>Пушкина</p>
					<div className={classes.street}>
					<div className={classes.point}>
							<HousePoint state='acquired' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='house' />
						</div>
						<div className={classes.point}>
							<HousePoint state='vacant' price={200} buildType='hotel' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonopolyCard;