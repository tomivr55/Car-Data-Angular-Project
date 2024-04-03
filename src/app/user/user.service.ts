import { Injectable, OnDestroy } from '@angular/core';
import { AuthUser } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<AuthUser | undefined>(undefined); // subject
  private user$ = this.user$$.asObservable(); //observable

  constructor(private http: HttpClient) {
    // запазва
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  user: AuthUser | undefined;

  userSubscription: Subscription;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  login(email: string, password: string) {
    return this.http.post<AuthUser>('/api/login', { email, password }).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.user$$.next(user);
        console.log(user);
      })
    );
  }

  logout() {
    return this.http.post('/api/logout', {}).pipe(
      tap(() => {
        this.user$$.next(undefined);
      })
    );
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return this.http
      .post<AuthUser>('/api/register', {
        username,
        email,
        password,
        rePassword,
        tel,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
        })
      );
  }

  getProfile() {
    return this.http.get<AuthUser>('/api/users/profile').pipe(
      tap((user) => {
        this.user$$.next(user);
      })
    );
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<AuthUser>('/api/users/profile', { username, email, tel })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
        })
      );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
