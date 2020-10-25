import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  size?: 'small' | 'regular' | 'large';
  children?: ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
}

export default function IconCircleButton(props: IProps) {
  const { size = 'regular', to = '', children, ...restProps } = props;

  if (!!to) {
    return (
      <Link
        to={to}
        {...restProps}
        className={`btn-icon-circle btn-icon-circle--${size}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...restProps}
      className={`btn-icon-circle btn-icon-circle--${size}`}
    >
      {children}
    </button>
  );
}
