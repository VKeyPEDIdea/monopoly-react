import classes from './NameBadge.module.scss';

interface NameBadgeProps {
	name: string;
    isShowToOwner: boolean;
}

const NameBadge = ({
	name,
    isShowToOwner,
}: NameBadgeProps) => {
	return (
		<span className={
            isShowToOwner
                ? [classes.badge ,classes['badge--owner']].join(' ')
                : classes.badge
            }>{name}</span>
	);
};

export default NameBadge;