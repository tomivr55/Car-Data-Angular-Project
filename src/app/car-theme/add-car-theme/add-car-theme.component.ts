import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-car-theme',
  templateUrl: './add-car-theme.component.html',
  styleUrls: ['./add-car-theme.component.css'],
})
export class AddCarThemeComponent {
  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  form = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });

  addTheme(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
