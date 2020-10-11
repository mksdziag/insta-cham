import { User } from './User';

export interface Comment {
  id: string;
  to: string;
  author: User;
  content: string;
  created: string;
  stats: {
    likes: number;
  };
}
