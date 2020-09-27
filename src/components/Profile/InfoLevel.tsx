import React from 'react';

interface IProps {
  flatted?: boolean;
}

export default function InfoLevel(props: IProps) {
  const { flatted = false } = props;
  return (
    <div className={`info-level ${flatted ? 'info-level--flatted' : ''}`}>
      <div className="info-level__item">
        <div className="info-level__stat">
          <b>231</b>
          <span>posts</span>
        </div>
      </div>
      <div className="info-level__item">
        <div className="info-level__stat">
          <b>231</b>
          <span>posts</span>
        </div>
      </div>
      <div className="info-level__item">
        <div className="info-level__stat">
          <b>231</b>
          <span>posts</span>
        </div>
      </div>
    </div>
  );
}
