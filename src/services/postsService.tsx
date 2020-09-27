import { posts } from '../fakeData/posts';
import { asyncFaker } from '../utils/asyncFaker';

export const fetchPost = async (id: string) => {
  const found = await asyncFaker(() => posts.find((p) => p.id === id), 900);

  return found;
};
export const getPostsByAuthor = async (id: string) => {
  const userPosts = await asyncFaker(
    () => posts.filter((p) => p.author.id === id),
    650
  );

  return userPosts;
};
