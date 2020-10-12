import { Image } from './Image';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  created: number;
  active: boolean;
  avatar: Image;
  description: string;
}

export interface UserSimple {
  id: string;
  userName: string;
  avatar: Image;
}
