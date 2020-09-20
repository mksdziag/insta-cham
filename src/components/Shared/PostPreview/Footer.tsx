import React from 'react';
import AuthorInfo from './AuthorInfo';
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
        <AuthorInfo author={author} created={created} />
      </div>
      <div className="post-preview-footer__actions">
        <Actions likes={stats.likes} />
      </div>
    </div>
  );
}
