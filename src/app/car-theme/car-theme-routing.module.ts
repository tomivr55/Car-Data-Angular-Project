import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AddCarThemeComponent } from './add-car-theme/add-car-theme.component';

const routes: Routes = [
  { path: 'themes', component: MainComponent },
  {
    path: 'add-theme',
    component: AddCarThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarThemeRoutingModule {}