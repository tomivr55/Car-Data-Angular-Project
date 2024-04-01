import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuth = true;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuth = false; // всеки път когато вземе user го сетва на false
      },
      error: () => {
        this.isAuth = false;
      },
      complete: () => {
        this.isAuth = false;
      },
    });
  }
}
