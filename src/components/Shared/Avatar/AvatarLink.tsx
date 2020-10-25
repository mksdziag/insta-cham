import React from 'react';
import { Link } from 'react-router-dom';

import Image from './ProfileImage';

import { UserSimple } from '../../../interfaces/User';

interface IProps {
  user: UserSimple;
  to?: string;
  size?: 'normal' | 'large' | 'small';
}

export default function AvatarLink(props: IProps) {
  const { user, to = '', size = 'normal' } = props;

  return (
    <Link to={to ? to : `/user/${user.id}`}>
      <Image size={size} url={user.avatar.url} description={user.userName} />
    </Link>
  );
}
