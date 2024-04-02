import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ErrorService } from './error.service';

const { apiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  api = '/api';

  constructor(private errorService: ErrorService, private router: Router) {}
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

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        } else {
          this.errorService.setError(err);
          this.router.navigate(['/error']);
        }

        return [err];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
