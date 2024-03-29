/* eslint-disable max-len */
import { GIconProps } from './GIconProps.model';

const GIcon = ({ title, color, size }: GIconProps) => {
  let pathes;
  const sizeValue = size || 24;

  switch (title) {
    case 'house':
      pathes = (
        <>
          <path d="M0,0H24V24H0Z" fill="none" />
          <path d="M10,20V14h4v6h5V12h3L12,3,2,12H5v8Z" fill={color} />
        </>
      );
      break;
    case 'hotel':
      pathes = (
        <path
          d="M17,11V3H7V7H3V21h8V17h2v4h8V11ZM7,19H5V17H7Zm0-4H5V13H7Zm0-4H5V9H7Zm4,4H9V13h2Zm0-4H9V9h2Zm0-4H9V5h2Zm4,8H13V13h2Zm0-4H13V9h2Zm0-4H13V5h2Zm4,12H17V17h2Zm0-4H17V13h2Z"
          fill={color}
        />
      );
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
    >
      {pathes}
    </svg>
  );
};

export default GIcon;
