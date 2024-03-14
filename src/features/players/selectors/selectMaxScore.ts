import { useAppSelector } from 'app/hooks';
import selectOrderedPlayersList from './selectOrderedPlayersList';

const selectMaxScore = (): number => {
  const orderedPlayersList = useAppSelector(selectOrderedPlayersList);
  const { cashCount, propertyCount } = [...orderedPlayersList][0];
  return cashCount + propertyCount;
};

export default selectMaxScore;
