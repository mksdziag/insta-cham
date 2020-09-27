import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../interfaces/Post';
import { User } from '../../interfaces/User';
import { getPostsByAuthor } from '../../services/postsService';
import { getUser } from '../../services/usersService';
import Loader from '../Shared/Loader';
import PostPreviewSimple from '../Shared/PostPreviewSimple';
import ProfilesGridWall from '../Shared/ProfilesGridWidget';
import UserImageLink from '../Shared/UserImageLink';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchUser(id);
    fetchUserPosts(id);
  }, [id]);

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
    <div className="profile-view">
      <div className="profile-view__info">
        <ProfileInfo profile={user} />

        <ProfilesGridWall />
      </div>
      <div className="profile-view__images">
        <div className="user-profile-images-grid">
          {posts.map((post, i) => (
            <div key={i} className="user-profile-images-grid__item">
              <PostPreviewSimple post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
