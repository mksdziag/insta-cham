import React from 'react';

interface IProps {
  name: string;
  description: string;
}
export default function ProfileDescription(props: IProps) {
  const { name, description } = props;

  return (
    <div className="profile-description">
      <div className="profile-description__name">{name}</div>
      <div
        className="profile-description__description-content"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}
