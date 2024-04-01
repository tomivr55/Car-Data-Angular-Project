import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const { apiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  api = '/api';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.api)) {
      req = req.clone({
        url: req.url.replace(this.api, apiUrl),
        withCredentials: true, //когато се направи POST req към сървъра и той ни върне coocie, ние му го връщаме
      });
    }
    console.log(req);

    return next.handle(req);
  }
}

export const AppInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
