import React from 'react';
import { BiEnvelope, BiHeart, BiComment } from 'react-icons/bi';
import IconCircleButton from '../Shared/Buttons/IconCircleButton';

export default function PostActions() {
  function handleLikeClick() {
    // TODO implement like
  }

  function handleChatClick() {
    // TODO implement chat
  }

  function handleEmailClick() {
    // TODO implement email click
  }

  return (
    <ul className="post-actions">
      <li className="post-actions__item">
        <IconCircleButton onClick={handleLikeClick}>
          <BiHeart />
        </IconCircleButton>
      </li>
      <li className="post-actions__item" onClick={handleChatClick}>
        <IconCircleButton>
          <BiComment />
        </IconCircleButton>
      </li>
      <li className="post-actions__item" onClick={handleEmailClick}>
        <IconCircleButton>
          <BiEnvelope />
        </IconCircleButton>
      </li>
    </ul>
  );
}
