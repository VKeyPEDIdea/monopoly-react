import { useDispatch } from 'react-redux';
import { useAppSelector } from 'app/hooks';
import { takeStepOnField } from 'features/field/reducers';
import {
  selectOrderedPlayersList,
  selectMaxScore,
  selectPlayerByID,
  selectCurrentPlayerId,
} from 'features/players/selectors';

import { passTheQueue } from 'features/players/reducers';
import Dice from 'shared/ui/Dice';
import ExtraDimensionСard from 'shared/ui/ExtraDimensionСard';
import Rating from 'entities/Rating';
import SectorCardPresenter from 'entities/SectorCardPresenter';
import classes from './MiddleBoard.module.scss';

const MiddleBoard = () => {
  const players = useAppSelector(selectOrderedPlayersList);
  const maxScore = useAppSelector(selectMaxScore);
  const currentPlayerId = useAppSelector(selectCurrentPlayerId);
  const nextPlayerId = useAppSelector((state) => state.players.next);
  const nextPlayerName = useAppSelector((state) =>
    selectPlayerByID(state, nextPlayerId)
  );
  const isActiveDice = useAppSelector((state) => state.field.dice.isActive);
  const dispatch = useDispatch();
  const onRollDiceHandler = (diceValue: [number, number]) => {
    dispatch(
      takeStepOnField({
        dice: diceValue,
        playerId: currentPlayerId,
      })
    );
  };
  const foo = () => {
    dispatch(passTheQueue());
  };

  return (
    <div className={classes.board}>
      <div className={classes['left-section']}>
        <Rating
          players={players}
          currentPlayer={currentPlayerId}
          maxScore={maxScore}
        />
        <div className={classes['dice-box']}>
          <Dice onRollDice={onRollDiceHandler} isActive={isActiveDice} />
        </div>
        <div className={classes['ctrl-panel']}>
          <button onClick={foo}>Передать ход {nextPlayerName}</button>
        </div>
      </div>
      <div className={classes['middle-section']}>
        <div className={classes.card}>
          <ExtraDimensionСard scale={1.1}>
            <SectorCardPresenter currentPlayerId={currentPlayerId} />
          </ExtraDimensionСard>
        </div>
      </div>
      <div className={classes['right-section']}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default MiddleBoard;
