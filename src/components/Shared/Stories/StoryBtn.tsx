import React from 'react';
import { Image } from '../../../interfaces/Image';

interface IProps {
  avatar: Image;
  read: boolean;
}

export default function StoryBtn(props: IProps) {
  const { avatar, read } = props;
  return (
    <div
      role="button"
      className={`story-button ${read ? 'story-button--read' : ''}`}
    >
      <div className="story-button__ring">
        <span className="story-button__ring-inner"></span>
        <div className="story-button__image-wrap">
          <img
            src={avatar.url}
            className="story-button__image"
            alt={avatar.name}
          />
        </div>
      </div>
    </div>
  );
}
