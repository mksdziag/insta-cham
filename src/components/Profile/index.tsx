import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();

  return (
    <div>
      <header>
        Profile with id <b>{id}</b>
      </header>
    </div>
  );
}
