import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentCarThemeComponent } from './current-car-theme/current-car-theme.component';
import { CarThemeRoutingModule } from './car-theme-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCarThemeComponent } from './add-car-theme/add-car-theme.component';

@NgModule({
  declarations: [AddCarThemeComponent, CurrentCarThemeComponent],
  imports: [CommonModule, CarThemeRoutingModule, ReactiveFormsModule],
})
export class CarThemeModule {}
