import React from 'react';
import { Link } from 'react-router-dom';

import AvatarLink from '../Avatar/AvatarLink';

import { User } from '../../../interfaces/User';

interface IProps {
  author: User;
  comment: {
    content: string;
    created: string;
    stats: {
      likes: number;
    };
  };
}

export default function Comment(props: IProps) {
  const { author, comment } = props;

  return (
    <article className="comment">
      <div className="comment__avatar">
        <AvatarLink user={author} />
      </div>
      <div className="comment__content">
        <div className="comment__message">
          <Link to={`/user/${author.name}`}>{author.name}</Link>{' '}
          {comment.content}
        </div>
        <div className="comment__footer">{comment.stats.likes} likes</div>
      </div>
    </article>
  );
}
