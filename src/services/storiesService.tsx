import { stories } from '../fakeData/stories';
import { asyncFaker } from '../utils/asyncFaker';

export const getStoriesBarItems = async (userId: string) => {
  const found = await asyncFaker(() => stories, 500);

  return found;
};
