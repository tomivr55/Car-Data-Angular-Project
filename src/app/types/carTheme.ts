import { CarPost } from './carPost';
import { User } from './user';

export interface CarTheme {
  _id: string;
  pic: string;
  subscribers: string[];
  posts: CarPost[];
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
