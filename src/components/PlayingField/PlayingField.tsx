import BottomLine from './BottomLine';
import TopLine from './TopLine/';
import classes from './PlayingField.module.scss';
import MiddleBoard from './MiddleBoard';
import { useAppSelector } from 'app/hooks';
import PlayerChipContainer from 'components/PlayerChip/PlayerChipContainer';
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