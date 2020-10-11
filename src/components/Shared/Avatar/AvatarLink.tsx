import React from 'react';
import { Link } from 'react-router-dom';

import Image from './ProfileImage';

import { UserSimple } from '../../../interfaces/User';

interface IProps {
  user: UserSimple;
  size?: 'normal' | 'large' | 'small';
}

export default function AvatarLink(props: IProps) {
  const { user, size = 'normal' } = props;

  return (
    <Link to={`/user/${user.id}`}>
      <Image size={size} url={user.avatar.url} description={user.name} />
    </Link>
  );
}
