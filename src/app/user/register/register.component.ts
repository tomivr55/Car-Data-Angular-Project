import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    username: ['tomas'],
    email: ['tomas@gmail.com'],
    tel: ['123-123-123'],
    passGroup: this.fb.group({
      password: ['123456'],
      rePassword: ['123456789'],
    }),
  });

  register(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}
