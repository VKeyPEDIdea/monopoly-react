import { RootState } from 'app/store';
import { PlayerChipInfo } from 'components/PlayerChip/PlayerChipContainer.interface';

const selectPlayersForChips = (state: RootState): PlayerChipInfo[] => {
    return state.players.list.map(({ name, location, id }) => { 
        return {
            name,
            coordinates: location.coordinates,
            id,
        }; 
    });
};

export default selectPlayersForChips;