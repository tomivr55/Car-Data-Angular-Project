import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-car-theme',
  templateUrl: './add-car-theme.component.html',
  styleUrls: ['./add-car-theme.component.css'],
})
export class AddCarThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    console.log({ themeName, postText });

    return this.apiService.createCarTheme(themeName, postText);
    // .subscribe((data) => {
    //   console.log({ data });
    // });
  }
}
