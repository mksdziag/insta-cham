import React from 'react';
import { User } from '../../interfaces/User';
import Btn from '../Shared/Btn';
import InfoLevel from './InfoLevel';
import ProfileDescription from './ProfileDescription';

interface IProps {
  profile: User;
  stats: { value: string; description: string }[];
}

export default function ProfileInfo(props: IProps) {
  const { profile, stats } = props;

  return (
    <div className="profile-info">
      <div className="profile-info__image-holder">
        <img src={profile.avatar.url} alt={profile.avatar.name} />
      </div>

      <div className="profile-info__stats">
        <InfoLevel stats={stats} />
        <div>
          <Btn block color="primary">
            Follow
          </Btn>
        </div>
      </div>

      <ProfileDescription
        description={profile.description}
        name={profile.name}
      />
    </div>
  );
}
