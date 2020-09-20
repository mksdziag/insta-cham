import React from 'react';

interface IProps {
  url: string;
  name: string;
}

export default function Cover(props: IProps) {
  const { url, name } = props;

  return (
    <div className="post-preview-cover">
      <img className="post-preview-cover__image" src={url} alt={name} />
    </div>
  );
}
