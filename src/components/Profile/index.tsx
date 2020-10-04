import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '../../interfaces/Post';
import { User } from '../../interfaces/User';
import { getPostsByAuthor } from '../../services/postsService';
import { getProfileStats, getUser } from '../../services/usersService';
import Loader from '../Shared/Loader';
import PostPreviewSimple from '../Shared/PostPreviewSimple';
import ProfilesGridWall from '../Shared/ProfilesGridWidget';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [profileStats, setProfileStats] = useState<
    { value: string; description: string }[]
  >([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData(id);

    async function fetchData(userId) {
      setLoading(true);
      await Promise.all([
        fetchUser(userId),
        fetchUserPosts(userId),
        getUserStats(userId),
      ]);
      setLoading(false);
    }
  }, [id]);

  async function fetchUser(id: string): Promise<any> {
    const user = await getUser(id);
    setUser(user);
  }

  async function getUserStats(id: string): Promise<any> {
    const stats = await getProfileStats(id);
    setProfileStats(stats);
  }

  async function fetchUserPosts(id: string): Promise<any> {
    const posts = await getPostsByAuthor(id);
    setPosts(posts);
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
        <ProfileInfo stats={profileStats} profile={user} />

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
