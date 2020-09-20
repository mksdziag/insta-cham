export interface IPost {
  id: string;
  image: {
    url: string;
    name: string;
    description: string;
  };
  author: {
    name: string;
    image: string;
    id: string;
  };
  created: string;
  stats: {
    likes: number;
  };
}
