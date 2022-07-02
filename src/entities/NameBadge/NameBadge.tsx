import Badge from 'shared/ui/Badge';

interface NameBadgeProps {
	name: string;
    isShowToOwner: boolean;
}

const NameBadge = ({
	name,
    isShowToOwner,
}: NameBadgeProps) => {
	return (
        <Badge color={isShowToOwner ? 'purple' : 'dark'}
            label={name}
            border={true}
        />
	);
};

export default NameBadge;