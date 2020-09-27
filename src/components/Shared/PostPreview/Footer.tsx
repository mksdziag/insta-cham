import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { UserSimple } from '../../../interfaces/User';

import UserInfo from '../UserInfo';
import Actions from './Actions';

dayjs.extend(relativeTime);

interface IProps {
  stats: {
    likes: number;
  };
  author: UserSimple;
  created: number;
}

export default function Footer(props: IProps) {
  const { stats, author, created } = props;

  const now = dayjs();
  const published = dayjs(created);
  const timeSinceStr = published.from(now);

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
