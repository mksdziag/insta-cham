import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../interfaces/Post';

interface IProps {
  post: IPost;
}

export default function PostSimplePreview(props: IProps) {
  const { post } = props;
  return (
    <div className="post-preview-simple">
      <Link to={`/post/${post.id}`}>
        <img
          className="post-preview-simple__image"
          src={post.image.url}
          alt={post.image.description}
        />
      </Link>
    </div>
  );
}
