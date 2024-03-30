import { CarPost } from './carPost';
import { User } from './user';

export interface CarTheme {
  subscribers: string[];
  posts: CarPost[];
  _id: string;
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
