import classes from './ShirtSideMailCard.module.scss';

const ShirtSideMailCard = ({
    title
}: {
    title: string;
}) => {
    return (
        <div className={classes.card}>
            <div className={classes.subtitle}>Вам письмо</div>
            <div className={classes.title}>{title}</div>
            <div className={classes.notice}>Переверните</div>
        </div>
    );
};

export default ShirtSideMailCard;