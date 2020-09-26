import React from 'react';
import InfoLevel from './InfoLevel';
import ProfileDescription from './ProfileDescription';

export default function ProfileInfo() {
  return (
    <div className="profile-info">
      <div className="profile-info__image-holder">
        <img
          src="https://images.unsplash.com/photo-1601110834637-010c1db7ddc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </div>

      <div className="profile-info__stats">
        <InfoLevel />
        <div>
          <button className="btn btn--primary btn--block">Follow</button>
        </div>
      </div>

      <ProfileDescription />
    </div>
  );
}
