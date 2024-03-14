import CardButton from 'shared/ui/CardButton';
import { ReactElement } from 'react';
import classes from './ImageCard.module.scss';

interface TrapCardProps {
  detailsText: string;
  imgSrc: string;
  children?: ReactElement;
}

const ImageCard = ({ detailsText, imgSrc, children }: TrapCardProps) => {
  return (
    <div className={classes.card}>
      <p className={classes.details}>{detailsText}</p>
      <img className={classes.image} src={imgSrc} alt="" />
      <div className={classes.actions}>
        <div className={classes.btn}>{children}</div>
      </div>
    </div>
  );
};

export default ImageCard;
