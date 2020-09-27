import React, { useState, useEffect } from 'react';
import { User } from '../../interfaces/User';
import { getFollowingProfiles } from '../../services/usersService';
import Loader from './Loader';
import UserImageLink from './UserImageLink';

export default function ProfilesGridWall() {
  const [profiles, setProfiles] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles(): Promise<void> {
    setLoading(true);

    const profiles = await getFollowingProfiles();
    setProfiles(profiles);

    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="profiles-grid-widget">
      {profiles.map((profile) => (
        <div key={profile.id} className="profiles-grid-widget__item">
          <UserImageLink
            avatar={profile.avatar}
            userId={profile.id}
            userName={profile.name}
          />
        </div>
      ))}
    </div>
  );
}
