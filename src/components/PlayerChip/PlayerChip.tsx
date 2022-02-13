import classes from './PlayerChip.module.scss'; 

const PlayerChip = () => {
    return (
        <div className={[classes.chip, 'chips'].join(' ')}>Р</div>
    );
};

export default PlayerChip;