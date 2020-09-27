import { users } from '../fakeData/users';
import { User } from '../interfaces/User';
import { asyncFaker } from '../utils/asyncFaker';

export const getUser = async (id: string): Promise<User> => {
  const found = await asyncFaker(() => users.find((u) => u.id === id), 350);

  return found;
};

export const getFollowingProfiles = async (): Promise<User[]> => {
  const profiles = await asyncFaker(() => users.slice(0, 9), 350);

  return profiles;
};
