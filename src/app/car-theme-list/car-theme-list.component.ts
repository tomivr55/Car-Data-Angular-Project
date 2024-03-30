import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CarTheme } from '../types/carTheme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-car-theme-list',
  templateUrl: './car-theme-list.component.html',
  styleUrls: ['./car-theme-list.component.css'],
})
export class CarThemeListComponent implements OnInit {
  constructor(private api: ApiService, private userService: UserService) {}
  carThemes: CarTheme[] = [];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  isSubscribed(carTheme: CarTheme) {
    const isSubscribedUser = carTheme.subscribers.find((s) => {
      return s === this.userService.user?.id;
    });
    return !!isSubscribedUser; // за да стане true/false
  }

  ngOnInit(): void {
    this.api.getCarThemes().subscribe((themes) => {
      // console.log(themes);
      this.carThemes = themes;
    });
  }
}
