import React, { ReactNode } from 'react';

interface IProps {
  size?: 'normal' | 'large' | 'small';
  color?: 'primary' | 'secondary';
  block?: boolean;
  children: ReactNode | string;
}

export default function Btn(props: IProps) {
  const { size, color, block, children } = props;
  return (
    <button
      className={`btn ${color ? 'btn--' + color : ''} ${
        size ? 'btn--' + size : ''
      } ${block ? 'btn--block' : ''}`}
    >
      {children}
    </button>
  );
}
