import React, { useState, useEffect } from 'react';

import Loader from '../Shared/Loader';
import InfoLevel from '../Profile/InfoLevel';
import PublicationTabs from './PublicationTabs';
import InfoMessage from '../Shared/InfoMessage';

import { getUser, getProfileStats } from '../../services/usersService';

import { User } from '../../interfaces/User';
import { alertTypes, SimpleStat } from '../../interfaces/misc';

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [profileStats, setProfileStats] = useState<SimpleStat[]>([]);
  const [loading, setLoading] = useState(true);

  const loggedUser = 'beniooYudym';
  useEffect(() => {
    fetchData(loggedUser);

    async function fetchData(userId) {
      setLoading(true);
      await Promise.all([fetchUser(userId), getUserStats(userId)]);
      setLoading(false);
    }
  }, [loggedUser]);

  async function fetchUser(id: string): Promise<any> {
    const user = await getUser(id);
    setUser(user);
  }

  async function getUserStats(id: string): Promise<any> {
    const stats = await getProfileStats(id);
    setProfileStats(stats);
  }

  // Render
  if (loading) {
    return <Loader space={100} />;
  }
  if (!user) {
    return (
      <InfoMessage
        title="Fot Found"
        message="User not found"
        type={alertTypes.Error}
      />
    );
  }
  return (
    <div className="my-profile">
      <div className="my-profile__user">
        <div className="my-profile-user">
          <div className="my-profile-user__avatar">
            <img src={user.avatar.url} alt={user.avatar.name} />
          </div>
          <div className="my-profile-user__info-content">
            <h2 className="">{user.name}</h2>
            <InfoLevel flatted stats={profileStats} />
            <div dangerouslySetInnerHTML={{ __html: user.description }}></div>
          </div>
        </div>
      </div>
      <div className="my-profile__publications">
        <PublicationTabs />
      </div>
    </div>
  );
}
