import React from 'react';
import { BiEnvelope, BiHeart, BiComment } from 'react-icons/bi';

export default function PostActions() {
  return (
    <ul className="post-actions">
      <li className="post-actions__item">
        <span className="post-actions__item-action">
          <BiHeart />
        </span>
      </li>
      <li className="post-actions__item">
        <span className="post-actions__item-action">
          <BiComment />
        </span>
      </li>
      <li className="post-actions__item">
        <span className="post-actions__item-action">
          <BiEnvelope />
        </span>
      </li>
    </ul>
  );
}
