import { UserSimple } from './User';
import { Image } from './Image';

export interface IPost {
  id: string;
  image: Image;
  description: string;
  author: UserSimple;
  created: number;
  active: boolean;
  stats: {
    likes: number;
    views: number;
  };
}

export enum PostTypes {
  All = 'all',
  Popular = 'popular',
  NotVisible = 'notVisible',
}
