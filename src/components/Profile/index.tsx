import React from 'react';
import { useParams } from 'react-router-dom';
import PostPreviewSimple from '../Shared/PostPreviewSimple';
import UserImageLink from '../Shared/UserImageLink';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
  const { id } = useParams();

  return (
    <div className="profile-view">
      <div className="profile-view__info">
        <ProfileInfo />

        <div className="followed-list-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="followed-list-grid__item">
              <UserImageLink />
            </div>
          ))}
        </div>
      </div>
      <div className="profile-view__images">
        <div className="user-profile-images-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="user-profile-images-grid__item">
              <PostPreviewSimple />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
