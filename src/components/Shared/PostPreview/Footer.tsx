import React from 'react';
import { timeSince } from '../../../helpers/timeSince';
import { UserSimple } from '../../../interfaces/User';
import UserInfo from '../UserInfo';
import Actions from './Actions';

interface IProps {
  stats: {
    likes: number;
  };
  author: UserSimple;
  created: number;
}

export default function Footer(props: IProps) {
  const { stats, author, created } = props;

  const timeSinceStr = timeSince(created);

  return (
    <div className="post-preview-footer">
      <div className="post-preview-footer__author">
        <UserInfo user={author}>
          <p className="author-info__timestamp">{timeSinceStr} ago</p>
        </UserInfo>
      </div>
      <div className="post-preview-footer__actions">
        <Actions likes={stats.likes} />
      </div>
    </div>
  );
}
