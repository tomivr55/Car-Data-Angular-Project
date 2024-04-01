import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-car-theme',
  templateUrl: './add-car-theme.component.html',
  styleUrls: ['./add-car-theme.component.css'],
})
export class AddCarThemeComponent {
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  form = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });

  addTheme(): void {
    if (this.form.invalid) {
      return;
    }

    const { themeName, postText } = this.form.value;
    this.apiService
      .postTheme(themeName!, postText!)
      .subscribe(() => this.router.navigate(['/themes']));
    console.log(this.form.value);
  }
}
