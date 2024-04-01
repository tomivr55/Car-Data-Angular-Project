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

  postTheme(themeName: string, postText: string) {
    return this.http.post<CarTheme>('/api/themes', { themeName, postText });
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
