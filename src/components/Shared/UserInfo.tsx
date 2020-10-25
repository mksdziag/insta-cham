import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { UserSimple } from '../../interfaces/User';
import AvatarLink from './Avatar/AvatarLink';
interface IProps {
  user: UserSimple;
  borderBottom?: boolean;
  children: ReactNode;
}

export default function UserInfo(props: IProps) {
  const { user, children, borderBottom } = props;

  return (
    <div
      className={`user-info ${borderBottom ? 'user-info--border-bottom' : ''}`}
    >
      <div className="user-info__avatar-wrapper">
        <AvatarLink user={user} size="small" />
      </div>
      <div>
        <Link to={`/user/${user.id}`} className="user-info__name">
          {user.userName}
        </Link>
        <div className="user-info__additional">{children}</div>
      </div>
    </div>
  );
}
