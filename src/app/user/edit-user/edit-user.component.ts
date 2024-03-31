import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserProfile } from 'src/app/types/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  profileDetails: UserProfile = {
    username: 'Rokosss',
    email: 'kokosss@abv.bg',
    tel: '123456789',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
  });

  saveProfileHandler(): void {
    console.log('daa', this.form.value);
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as UserProfile;
    this.router.navigate(['/profile']);
  }
}
