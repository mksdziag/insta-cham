import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../Shared/UserInfo';

import { IPost } from '../../interfaces/Post';
import { fetchPost } from '../../services/postsService';
import Loader from '../Shared/Loader';
import PostActions from './PostActions';

export default function PostView() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    loadPost();

    async function loadPost() {
      setLoading(true);

      const fetchedPost = await fetchPost(id);
      setPost(fetchedPost);

      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <Loader space={100} />;
  }
  if (!post) {
    return <div>Sorry... Something went wrong.</div>;
  }

  return (
    <div className="post-view">
      <div className="post-view__main">
        <div className="post-screen">
          <img
            className="post-screen__image"
            src={post && post.image.url}
            alt={post && post.image.name}
          />
        </div>
      </div>
      <div className="post-view__aside">
        <UserInfo user={post && post.author} borderBottom>
          <span>Poland</span>
        </UserInfo>
        <PostActions />
      </div>
    </div>
  );
}
