import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CarTheme } from './types/carTheme';
import { CarPost } from './types/carPost';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

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
    debugger;
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
}
