import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  author: {
    image: string;
    name: string;
    id: string;
  };
  created: string;
}

export default function AuthorInfo(props: IProps) {
  const { author, created } = props;

  return (
    <div className="author-info">
      <Link to={`/user/${author.id}`} className="author-info__avatar-wrapper">
        <img
          src={author.image}
          alt={author.name}
          className="author-info__image"
        />
      </Link>
      <div>
        <Link to={`/user/${author.id}`} className="author-info__name">
          {author.name}
        </Link>
        <p className="author-info__timestamp">{created}</p>
      </div>
    </div>
  );
}
