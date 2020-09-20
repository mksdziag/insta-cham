import React from 'react';
import PostPreview from '../Shared/PostPreview';
import { IPost } from '../../interfaces/Post';

import { posts as timelinePosts } from '../../fakeData/timelinaPosts';
const posts: IPost[] = timelinePosts;

export default function Timeline() {
  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
}
