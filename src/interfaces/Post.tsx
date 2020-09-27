import { UserSimple } from './User';
import { Image } from './Image';

export interface IPost {
  id: string;
  image: Image;
  description: string;
  author: UserSimple;
  created: number;
  stats: {
    likes: number;
    views: number;
  };
}
