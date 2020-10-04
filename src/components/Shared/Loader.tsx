import React from 'react';

interface IProps {
  space?: number;
  unit?: 'px' | 'vh' | 'rem';
  size?: 'tiny' | 'small' | 'normal' | 'large';
}

export default function Loader(props: IProps) {
  const { size = 'normal', space = 50, unit = 'px' } = props;
  return (
    <div
      style={{ marginTop: space + unit, marginBottom: space + unit }}
      className={`spinner-loader spinner-loader--${size}`}
    >
      Loading...
    </div>
  );
}
