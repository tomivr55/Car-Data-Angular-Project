import { CarTheme } from './carTheme';
import { User } from './user';

export interface CarPost {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: CarTheme;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface Comment {
  postText: string;
}
