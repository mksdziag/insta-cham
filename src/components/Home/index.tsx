import React from 'react';
import StoriesBar from '../Shared/Stories/StoriesBar';
import Timeline from '../Timeline';

export default function Home() {
  return (
    <>
      <StoriesBar />
      <div>
        <Timeline />
      </div>
    </>
  );
}
