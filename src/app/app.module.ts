import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { CarThemeListComponent } from './car-theme-list/car-theme-list.component';
import { CarPostsListComponent } from './car-posts-list/car-posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

import { ErrorComponent } from './error/error.component';
import { CarThemeModule } from './car-theme/car-theme.module';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarThemeListComponent,
    CarPostsListComponent,
    HomeComponent,
    ErrorComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    CarThemeModule,
    AppRoutingModule,
  ],
  providers: [
    AppInterceptorProvider,
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'short' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
