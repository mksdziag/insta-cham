import React from 'react';
import { BiHeart } from 'react-icons/bi';
import IconCircleButton from '../Buttons/IconCircleButton';

interface IProps {
  likes: number;
}

export default function Actions(props: IProps) {
  const { likes } = props;

  function handleLikeClick() {
    // TODO implement post like
  }

  return (
    <div className="post-footer-actions">
      <span className="post-footer-actions__likes-count">{likes} likes</span>
      <div className="post-footer-actions__like-heart">
        <IconCircleButton onClick={handleLikeClick}>
          <BiHeart />
        </IconCircleButton>
      </div>
    </div>
  );
}
