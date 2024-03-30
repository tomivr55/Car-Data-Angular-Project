import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AddCarThemeComponent } from './add-car-theme/add-car-theme.component';
import { CurrentCarThemeComponent } from './current-car-theme/current-car-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':themeId', component: CurrentCarThemeComponent },
    ],
  },
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
