import React, { useEffect, useState } from 'react';
import { IPost, PostTypes } from '../../interfaces/Post';
import { alertTypes } from '../../interfaces/misc';

import PostSimplePreview from '../Shared/PostPreviewSimple';
import CustomTabs from '../Shared/CustomTabs';
import InfoMessage from '../Shared/InfoMessage';

import {
  getAuthorMostPopularPosts,
  getAuthorNotActivePosts,
  getPostsByAuthor,
} from '../../services/postsService';

export default function PublicationTabs() {
  const userId = 'beniooYudym';
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [postsType, setPostsType] = useState<PostTypes>(PostTypes.All);
  useEffect(() => {
    fetchPosts();

    async function fetchPosts() {
      let posts: IPost[] = [];

      setLoading(true);
      if (postsType === PostTypes.All) posts = await getPostsByAuthor(userId);
      if (postsType === PostTypes.Popular)
        posts = await getAuthorMostPopularPosts(userId);
      if (postsType === PostTypes.NotVisible)
        posts = await getAuthorNotActivePosts(userId);
      setLoading(false);

      setPosts(posts);
    }
  }, [userId, postsType]);

  function handleTabChoose(type: PostTypes): void {
    setPostsType(type);
  }

  const displayPostTypes = [
    { id: PostTypes.All, name: 'All' },
    { id: PostTypes.Popular, name: 'Most popular' },
    { id: PostTypes.NotVisible, name: 'Not Visible' },
  ];
  return (
    <CustomTabs
      currentTabLink={postsType}
      onTablinkClick={handleTabChoose}
      isLoading={loading}
      tabLinks={displayPostTypes}
    >
      {posts.length ? (
        <div className="publications-gallery-grid">
          {posts.map((post) => (
            <div key={post.id} className="publications-gallery-grid__item">
              <PostSimplePreview post={post} />
            </div>
          ))}
        </div>
      ) : (
        <InfoMessage
          type={alertTypes.Info}
          title="Hmmmm..."
          message="No posts to display on this tab."
        />
      )}
    </CustomTabs>
  );
}
