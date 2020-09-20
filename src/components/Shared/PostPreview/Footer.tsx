import React from 'react';
import UserInfo from '../UserInfo';
import Actions from './Actions';

interface IProps {
  stats: {
    likes: number;
  };
  author: {
    image: string;
    name: string;
    id: string;
  };
  created: string;
}

export default function Footer(props: IProps) {
  const { stats, author, created } = props;
  return (
    <div className="post-preview-footer">
      <div className="post-preview-footer__author">
        <UserInfo user={author}>
          <p className="author-info__timestamp">{created}</p>
        </UserInfo>
      </div>
      <div className="post-preview-footer__actions">
        <Actions likes={stats.likes} />
      </div>
    </div>
  );
}
