import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../interfaces/Image';

interface IProps {
  avatar: Image;
  userName: string;
  userId: string;
}

export default function UserImageLink(props: IProps) {
  const { avatar, userId, userName } = props;

  return (
    <Link to={'/user/' + userId} className="profile-rounded-image-link">
      <div className="profile-rounded-image-link__image-holder">
        <img src={avatar.url} alt={avatar.name} />
      </div>
      <span className="profile-rounded-image-link__text">{userName}</span>
    </Link>
  );
}
