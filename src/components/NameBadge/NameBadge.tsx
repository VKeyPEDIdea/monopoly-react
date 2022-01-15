import classes from './NameBadge.module.scss';

interface NameBadgeProps {
	name: string;
}

const NameBadge = ({
	name
}: NameBadgeProps) => {
	return (
		<span className={classes.badge}>{name}</span>
	);
};

export default NameBadge;