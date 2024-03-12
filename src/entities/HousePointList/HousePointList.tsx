import HousePoint from 'shared/ui/HousePoint/HousePoint';
import { HousePointProps } from 'shared/ui/HousePoint/HousePoint.model';
import classes from './HousePointList.module.scss';

const HousePointList = ({ list }: { list: HousePointProps[] | null }) => {
  let housePointList;

  if (list) {
    housePointList = list.map(({ state, price, buildType }, i) => {
      return (
        <div className={classes.point} key={Date.now() + i + price}>
          <HousePoint state={state} price={price} buildType={buildType} />
                   </div>;
      );
    });
  } else {
    housePointList = 'Нет участков';
  }

  return <div className={classes.list}>{housePointList}</div>;
};

export default HousePointList;
