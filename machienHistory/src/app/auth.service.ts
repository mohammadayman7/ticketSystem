import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private isLoggedIn = false;

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    return true
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
