import { posts } from '../fakeData/timelinaPosts';
import { asyncFaker } from '../utils/asyncFaker';

export const fetchPost = async (id) => {
  const found = asyncFaker(() => posts.find((p) => p.id === id), 900);

  return found || null;
};
