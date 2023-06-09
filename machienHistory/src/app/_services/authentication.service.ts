import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../_models/user";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User |null>;
  public currentUser: Observable<User |null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User |null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/users/authenticate', { username, password })
  .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }

      return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
