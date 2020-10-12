import React from 'react';

import Btn from '../Shared/Btn';
import InfoLevel from './InfoLevel';
import ProfileDescription from './ProfileDescription';

import { User } from '../../interfaces/User';
import { SimpleStat } from '../../interfaces/misc';

interface IProps {
  profile: User;
  stats: SimpleStat[];
}

export default function ProfileInfo(props: IProps) {
  const { profile, stats } = props;

  return (
    <div className="profile-info">
      <div className="profile-info__image-holder">
        <img src={profile.avatar.url} alt={profile.avatar.description} />
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
        name={profile.userName}
      />
    </div>
  );
}
