import { CarPost } from './carPost';

export interface User {
  themes: string[];
  posts: CarPost[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface AuthUser {
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

export interface UserProfile {
  username: string;
  email: string;
  tel: string;
}
