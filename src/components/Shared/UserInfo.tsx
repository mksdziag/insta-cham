import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  user: {
    image: string;
    name: string;
    id: string;
  };
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
        <img src={user.image} alt={user.name} className="user-info__image" />
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
