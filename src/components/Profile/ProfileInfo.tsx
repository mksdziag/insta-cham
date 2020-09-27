import React from 'react';
import { User } from '../../interfaces/User';
import InfoLevel from './InfoLevel';
import ProfileDescription from './ProfileDescription';

interface IProps {
  profile: User;
}

export default function ProfileInfo(props: IProps) {
  const { profile } = props;

  return (
    <div className="profile-info">
      <div className="profile-info__image-holder">
        <img src={profile.avatar.url} alt={profile.avatar.name} />
      </div>

      <div className="profile-info__stats">
        <InfoLevel />
        <div>
          <button className="btn btn--primary btn--block">Follow</button>
        </div>
      </div>

      <ProfileDescription
        description={profile.description}
        name={profile.name}
      />
    </div>
  );
}
