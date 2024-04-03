import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserProfile } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  userData: UserProfile = {
    username: '',
    email: '',
    tel: '',
  };

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;

    this.userData = {
      username,
      email,
      tel,
    };

    this.form.setValue({
      username,
      email,
      tel,
    });
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
  });

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, email, tel } = this.form.value;

    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}
