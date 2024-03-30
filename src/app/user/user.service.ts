import { Injectable } from '@angular/core';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: AuthUser | undefined;
  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    return !!this.user;
  }
  constructor() {
    try {
      // записва стойността
      const lsUser = localStorage.getItem(this.USER_KEY) || ''; //ако не върне (getItem) нищо да бъде празен стринг
      this.user = JSON.parse(lsUser);
    } catch (error) {
      // ако има грешка == undefined
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'Cveti',
      email: 'cveti.abv.bg',
      phoneNumber: '123-123-123-123',
      password: '123123',
      id: '5fa64ca72183ce1728ff3726',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
