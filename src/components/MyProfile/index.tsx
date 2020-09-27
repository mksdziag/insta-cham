import React, { useState, useEffect } from 'react';
import { User } from '../../interfaces/User';
import { getUser } from '../../services/usersService';
import { getPostsByAuthor } from '../../services/postsService';
import Loader from '../Shared/Loader';
import InfoLevel from '../Profile/InfoLevel';
import PostSimplePreview from '../Shared/PostPreviewSimple';
import { IPost } from '../../interfaces/Post';

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUser('beniooYudym');
    fetchUserPosts('beniooYudym');
  }, []);

  async function fetchUser(id: string): Promise<any> {
    setLoading(true);
    const user = await getUser(id);
    setUser(user);

    setLoading(false);
  }

  async function fetchUserPosts(id: string): Promise<any> {
    setLoading(true);
    const posts = await getPostsByAuthor(id);
    setPosts(posts);

    setLoading(false);
  }

  // Render
  if (loading) {
    return <Loader space={100} />;
  }
  if (!user) {
    return <div>Sorry... Something went wrong.</div>;
  }
  return (
    <div className="my-profile">
      <div className="my-profile__user">
        <div className="my-profile-user">
          <div className="my-profile-user__avatar">
            <img src={user.avatar.url} alt={user.avatar.name} />
          </div>
          <div className="my-profile-user__info-content">
            <h2 className="">{user.name}</h2>
            <InfoLevel flatted />
            <div dangerouslySetInnerHTML={{ __html: user.description }}></div>
          </div>
        </div>
      </div>
      <div className="my-profile__publications">
        <div className="publication-tabs">
          <div className="publication-tabs__tab-links">
            <span className="publication-tabs__tab-link publication-tabs__tab-link--active">
              All
            </span>
            <span className="publication-tabs__tab-link">Most popular</span>
            <span className="publication-tabs__tab-link">Not visible</span>
          </div>
          <div className="publication-tabs__tab-content">
            <div className="publications-gallery-grid">
              {posts.map((post) => (
                <div key={post.id} className="publications-gallery-grid__item">
                  <PostSimplePreview post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
