import React from 'react';
import { BiHeart } from 'react-icons/bi';

interface IProps {
  likes: number;
}

export default function Actions(props: IProps) {
  const { likes } = props;
  return (
    <div className="post-footer-actions">
      <span className="post-footer-actions__likes-count">{likes} likes</span>
      <div className="post-footer-actions__like-heart">
        <BiHeart />
      </div>
    </div>
  );
}
