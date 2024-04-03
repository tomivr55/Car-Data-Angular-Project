import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { CarTheme } from '../types/carTheme';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) {}

  lastCarTheme: CarTheme[] = [];

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  ngOnInit(): void {
    this.apiService.getCarThemes().subscribe((theme) => {
      const lastCarThemeEdited = theme;
      const last = lastCarThemeEdited.slice(-4).reverse();
      this.lastCarTheme = last;
      console.log(last);
    });
  }

  goto(): void {}
}
