import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CarTheme } from 'src/app/types/carTheme';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-car-theme',
  templateUrl: './current-car-theme.component.html',
  styleUrls: ['./current-car-theme.component.css'],
})
export class CurrentCarThemeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  currentCarTheme = {} as CarTheme;

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userName(): string {
    return this.userService.user?.username || '';
  }

  form = this.fb.group({
    postText: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];
      this.apiService.getCurrentCarTheme(id).subscribe((data) => {
        this.currentCarTheme = data;
      });
    });
  }

  comment(): void {
    if (this.form.invalid) {
      return;
    }

    const { postText } = this.form.value;

    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];

      this.apiService
        .postComment(id, postText!)
        .subscribe(() => this.router.navigate([`/themes`]));
    });
  }

  like(): void {}
}
