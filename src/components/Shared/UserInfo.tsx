import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { UserSimple } from '../../interfaces/User';

interface IProps {
  user: UserSimple;
  borderBottom?: boolean;
  children: ReactNode;
}

export default function UserInfo(props: IProps) {
  const { user, children, borderBottom } = props;

  return (
    <div
      className={`user-info ${
        borderBottom ? 'user-info--border-bottom' : null
      }`}
    >
      <Link to={`/user/${user.id}`} className="user-info__avatar-wrapper">
        <img
          src={user.avatar.url}
          alt={user.avatar.name}
          className="user-info__image"
        />
      </Link>
      <div>
        <Link to={`/user/${user.id}`} className="user-info__name">
          {user.name}
        </Link>
        <div className="user-info__additional">{children}</div>
      </div>
    </div>
  );
}
