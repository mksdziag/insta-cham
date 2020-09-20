import React from 'react';
import { Link } from 'react-router-dom';

import { IPost } from '../../../interfaces/Post';

import Cover from './Cover';
import Footer from './Footer';

interface IProps {
  post: IPost;
}

export default function PostPreview(props: IProps) {
  const { post } = props;

  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <Cover name={post.image.name} url={post.image.url} />
      </Link>
      <Footer author={post.author} created={post.created} stats={post.stats} />
    </article>
  );
}
