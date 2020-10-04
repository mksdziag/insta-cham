import React from 'react';

interface IProps {
  flatted?: boolean;
  stats: { value: string; description: string }[];
}

export default function InfoLevel(props: IProps) {
  const { flatted = false, stats = [] } = props;
  return (
    <div className={`info-level ${flatted ? 'info-level--flatted' : ''}`}>
      {stats.map((stat) => (
        <div key={stat.description} className="info-level__item">
          <div className="info-level__stat">
            <b>{stat.value}</b>
            <span>{stat.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
