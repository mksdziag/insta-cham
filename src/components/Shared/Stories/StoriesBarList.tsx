import React from 'react';
import { StoryBarItem } from '../../../interfaces/Stories';
import StoryBtn from './StoryBtn';

interface IProps {
  stories: StoryBarItem[];
}

export default function StoriesBarList(props: IProps) {
  const { stories } = props;

  return (
    <ul className="stories-list">
      {stories.map((story) => (
        <li key={story.id} className="stories-list__item">
          <StoryBtn avatar={story.cover} read={story.read} />
        </li>
      ))}
    </ul>
  );
}
