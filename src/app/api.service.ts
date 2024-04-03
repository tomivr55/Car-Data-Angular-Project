import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CarTheme } from './types/carTheme';
import { CarPost } from './types/carPost';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private userServise: UserService) {}

  getCarThemes() {
    const url = environment.apiUrl;
    return this.http.get<CarTheme[]>(`${url}/themes`);
  }

  getCurrentCarTheme(id: string) {
    const url = environment.apiUrl;
    return this.http.get<CarTheme>(`${url}/themes/${id}`);
  }

  postTheme(themeName: string, postText: string, pic: string) {
    return this.http.post<CarTheme>('/api/themes', {
      themeName,
      postText,
      pic,
    });
  }

  postComment(id: string, postText: string) {
    const url = environment.apiUrl;
    return this.http.post<Comment>(`/api/themes/${id}`, { postText });
  }

  getCarPosts(limit?: number) {
    const url = environment.apiUrl;

    let limitUrl = `${url}/posts`;
    if (limit) {
      limitUrl += `?limit=${limit}`;
    }

    return this.http.get<CarPost[]>(limitUrl);
  }

  likePost(postId: string) {
    const url = environment.apiUrl;
    const token = this.userServise.user!;
    console.log(token);

    debugger;
    return this.http.put<any>(`${url}/likes/${postId}`, {});
  }
}
