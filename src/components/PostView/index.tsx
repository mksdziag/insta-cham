import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();

  return <div>Post with id: {id}</div>;
}
