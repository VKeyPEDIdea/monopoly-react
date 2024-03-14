import { useAppSelector } from 'app/hooks';
import { setTargetSector } from 'features/field/playingFieldSlice';
import { transferToTarger } from 'features/field/reducers';
import {
  getTargetToTransfer,
  selectFieldIdByName,
  selectRepairPrice,
} from 'features/field/selectors';
import { changePlayerBalance, donateForGift } from 'features/players/reducers';
import { useDispatch } from 'react-redux';

interface ChanceAction {
  btnTitle: string;
  details: string;
  action: () => void;
}

interface GetChanceActionsProps {
  type: string;
  btnText: string;
  detailsText: string;
  count?: number;
  isNegative?: boolean;
  targetSector?: number;
  currentPlayerId: number;
}

const getChanceActions = ({
  type,
  btnText,
  detailsText,
  count,
  isNegative,
  targetSector,
  currentPlayerId,
}: GetChanceActionsProps) => {
  const dispatch = useDispatch();

  const chanceActions: {
    [key: string]: () => ChanceAction | null;
  } = {
    balance: () => {
      if (count) {
        return {
          btnTitle: btnText,
          details: detailsText,
          action: () =>
            dispatch(
              changePlayerBalance({
                type: isNegative ? 'decrease' : 'increase',
                payload: {
                  playerId: currentPlayerId,
                  count,
                },
              })
            ),
        };
      }
      return null;
    },
    'all-players': () => ({
      btnTitle: btnText,
      details: detailsText,
      action: () => dispatch(donateForGift(count || 0, currentPlayerId)),
    }),
    prison: () => {
      const fieldId = useAppSelector((state) =>
        selectFieldIdByName(state, 'Тюрьма')
      );
      return {
        btnTitle: btnText,
        details: detailsText,
        action: () => {
          dispatch(setTargetSector(fieldId));
          dispatch(
            transferToTarger({
              playerId: currentPlayerId,
              targetSectorId: fieldId ?? 0,
            })
          );
        },
      };
    },
    transferToTarget: () => ({
      btnTitle: btnText,
      details: detailsText,
      action: () => {
        dispatch(setTargetSector(targetSector));
        dispatch(
          transferToTarger({
            playerId: currentPlayerId,
            targetSectorId: targetSector || 0,
          })
        );
      },
    }),
    transferToRandom: () => {
      const { id, title } = useAppSelector(getTargetToTransfer);
      return {
        btnTitle: btnText + title,
        details: detailsText,
        action: () => {
          dispatch(setTargetSector(id));
          dispatch(
            transferToTarger({
              playerId: currentPlayerId,
              targetSectorId: id,
            })
          );
        },
      };
    },
    expenses: () => {
      const { repairPrice, houseCount, hotelCount } = useAppSelector((state) =>
        selectRepairPrice(state, currentPlayerId)
      );
      return {
        btnTitle: btnText,
        details: `${detailsText}${repairPrice} - стоимость ремонта. Количество домов: ${houseCount}, количество отелей: ${hotelCount}`,
        action: () =>
          dispatch(
            changePlayerBalance({
              type: 'decrease',
              payload: {
                playerId: currentPlayerId,
                count: repairPrice,
              },
            })
          ),
      };
    },
  };

  return chanceActions[type]?.();
};

export default getChanceActions;
