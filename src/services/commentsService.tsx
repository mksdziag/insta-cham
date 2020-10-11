import { asyncFaker } from '../utils/asyncFaker';
import { Comments } from '../fakeData/comments';
import { Comment } from '../interfaces/Comment';

export const getCommentsToPost = async (postId: string) => {
  console.log(postId);
  const found: Comment[] = await asyncFaker(
    () => Comments.filter((c: Comment) => c.to === postId),
    900
  );

  return found;
};
