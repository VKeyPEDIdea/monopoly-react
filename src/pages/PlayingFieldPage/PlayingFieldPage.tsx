import BottomLine from 'entities/BottomLine';
import TopLine from 'entities/TopLine';
import classes from './PlayingFieldPage.module.scss';
import MiddleBoard from 'entities/MiddleBoard';
import { useAppSelector } from 'app/hooks';
import PlayerChipContainer from 'entities/PlayerChip/PlayerChipContainer';
import {
    selectPlayersForChips,
    selectCurrentPlayerId,
} from 'features/players/selectors';

const PlayingField = () => {
    const playerChipsList = useAppSelector(selectPlayersForChips);
    const currentPlayerId = useAppSelector(selectCurrentPlayerId);

	return (
		<div className={classes.field}>
            <PlayerChipContainer list={playerChipsList}
                currentPlayerId={currentPlayerId}/>
			<TopLine />
			<MiddleBoard />
			<BottomLine />
		</div>
	);
};

export default PlayingField;