import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CarTheme } from '../types/carTheme';

@Component({
  selector: 'app-car-theme-list',
  templateUrl: './car-theme-list.component.html',
  styleUrls: ['./car-theme-list.component.css'],
})
export class CarThemeListComponent implements OnInit {
  constructor(private api: ApiService) {}
  carThemes: CarTheme[] = [];

  ngOnInit(): void {
    this.api.getCarThemes().subscribe((themes) => {
      console.log(themes);
      this.carThemes = themes;
    });
  }
}
