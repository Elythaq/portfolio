import React from 'react';
import { IconProps } from './types';

export const InkBottle: React.FC<IconProps> = ({ size = 18, className = "", ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d="M16 9l4.371 1.749c.38.151.629.52.629.928V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm4 5H8v5h12v-5zM16 3c.552 0 1 .448 1 1v4H7V4c0-.552.448-1 1-1h8z"></path>
    </svg>
  );
};
