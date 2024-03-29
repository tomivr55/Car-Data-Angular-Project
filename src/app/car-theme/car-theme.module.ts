import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarThemeComponent } from './add-car-theme/add-car-theme.component';
import { CurrentCarThemeComponent } from './current-car-theme/current-car-theme.component';
import { CarThemeRoutingModule } from './car-theme-routing.module';

@NgModule({
  declarations: [AddCarThemeComponent, CurrentCarThemeComponent],
  imports: [CommonModule, CarThemeRoutingModule],
})
export class CarThemeModule {}
