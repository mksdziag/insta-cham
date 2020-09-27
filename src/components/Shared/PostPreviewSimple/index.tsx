import React from 'react';
import { IPost } from '../../../interfaces/Post';

interface IProps {
  post: IPost;
}

export default function PostSimplePreview(props: IProps) {
  const { post } = props;
  return (
    <div className="post-preview-simple">
      <img
        className="post-preview-simple__image"
        src={post.image.url}
        alt={post.image.name}
      />
    </div>
  );
}
