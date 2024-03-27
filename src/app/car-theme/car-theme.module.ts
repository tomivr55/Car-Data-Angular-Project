import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarThemeComponent } from './add-car-theme/add-car-theme.component';
import { CurrentCarThemeComponent } from './current-car-theme/current-car-theme.component';

@NgModule({
  declarations: [AddCarThemeComponent, CurrentCarThemeComponent],
  imports: [CommonModule],
})
export class CarThemeModule {}
