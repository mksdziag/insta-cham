import React, { useState, useEffect } from 'react';
import { User } from '../../interfaces/User';
import { getUser } from '../../services/usersService';
import { getPostsByAuthor } from '../../services/postsService';
import Loader from '../Shared/Loader';
import InfoLevel from '../Profile/InfoLevel';
import { IPost } from '../../interfaces/Post';
import PublicationTabs from './PublicationTabs';

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
        <PublicationTabs />
      </div>
    </div>
  );
}
