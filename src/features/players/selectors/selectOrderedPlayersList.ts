import { RootState } from 'app/store';
import { Player } from 'core/Player/Player.interface';

const selectOrderedPlayersList = (state: RootState): Player[] => {
  const orderedList = [...state.players.list];
  return orderedList.sort((plr1, plr2) => {
    return (
      plr2.cashCount +
      plr2.propertyCount -
      (plr1.cashCount + plr1.propertyCount)
    );
  });
};

export default selectOrderedPlayersList;
