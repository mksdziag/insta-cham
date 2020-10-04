import { Image } from './Image';

export interface StoryBarItem {
  id: string;
  profileName: string;
  cover: Image;
  read: boolean;
}
