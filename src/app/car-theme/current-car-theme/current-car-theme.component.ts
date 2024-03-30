import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CarTheme } from 'src/app/types/carTheme';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-car-theme',
  templateUrl: './current-car-theme.component.html',
  styleUrls: ['./current-car-theme.component.css'],
})
export class CurrentCarThemeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {}

  currentCarTheme = {} as CarTheme;

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userName(): string {
    return this.userService.user?.firstName || '';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];
      this.apiService.getCurrentCarTheme(id).subscribe((data) => {
        this.currentCarTheme = data;
      });
    });
  }
}
