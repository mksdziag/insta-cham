import React from 'react';

interface IProps {
  space?: number;
  unit?: 'px' | 'vh' | 'rem';
}

export default function Loader(props: IProps) {
  const { space = 50, unit = 'px' } = props;
  return (
    <div
      style={{ marginTop: space + unit, marginBottom: space + unit }}
      className="spinner-loader"
    >
      Loading...
    </div>
  );
}
