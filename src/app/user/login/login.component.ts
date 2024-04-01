import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  login(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.value;
    console.log(this.form.value);
    this.userService
      .login(email!, password!)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
