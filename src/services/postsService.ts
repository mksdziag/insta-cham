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

export const getAuthorMostPopularPosts = async (authorId: string) => {
  const found = await asyncFaker(
    () =>
      posts
        .filter((p) => p.author.id === authorId)
        .sort((a, b) => a.stats.likes - b.stats.likes),
    650
  );

  return found;
};

export const getAuthorNotActivePosts = async (authorId: string) => {
  const found = await asyncFaker(
    () =>
      posts.filter((p) => p.active === false && p.author.id === authorId && p),
    650
  );

  return found;
};
