import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  user: {
    image: string;
    name: string;
    id: string;
  };
  children: ReactNode;
}

export default function UserInfo(props: IProps) {
  const { user, children } = props;

  return (
    <div className="user-info">
      <Link to={`/user/${user.id}`} className="user-info__avatar-wrapper">
        <img src={user.image} alt={user.name} className="user-info__image" />
      </Link>
      <div>
        <Link to={`/user/${user.id}`} className="user-info__name">
          {user.name}
        </Link>
        {children}
      </div>
    </div>
  );
}
