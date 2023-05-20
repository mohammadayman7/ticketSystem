import { Injectable } from '@angular/core';
import { Router  } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];
  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Check if the username and password are valid
    const isValid = this.users.some(u => u.username === username && u.password === password);

    if (isValid) {
      // Set the isLoggedIn flag to true and navigate to the home page
      this.isLoggedIn = true;
      localStorage.setItem("username", "logIn")
      this.router.navigate(['/home']);
    }

    return isValid;
  }

  logout(): void {
    // Set the isLoggedIn flag to false and navigate to the login page
    this.isLoggedIn = false;
    localStorage.removeItem("username")
    this.router.navigate(['/login']);
  }

  isLoggedIns(): boolean {
    return this.isLoggedIn;
  }
}
// login(username: string, password: string): Promise<boolean> {
//   // Call the fake API to get a token
//   return this.http.post<any>('https://fakeapi.com/login', { username, password })
//     .toPromise()
//     .then(response => {
//       // If the API call was successful, set the token in local storage and navigate to the home page
//       localStorage.setItem('token', response.token);
//       this.isLoggedIn = true;
//       console.log(this.isLoggedIn)
//       this.router.navigate(['/home']);
//       return true;
//     })
//     .catch(error => {
//       // If the API call was not successful, log the error and return false
//       console.error(error);
//       return false;
//     });
// }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private token: string | null = null;
//
//   constructor(private http: HttpClient) {}
//
//   login(username: string, password: string): Promise<boolean> {
//     return this.http.post<{ token: string }>('/api/login', { username, password })
//       .toPromise()
//       .then(response => {
//         if (response && response.token) { // Add null check
//           this.token = response.token;
//           localStorage.setItem('token', response.token);
//           return true;
//         }
//         return false;
//       })
//       .catch(() => false);
//   }
//
//
//   logout() {
//     this.token = null;
//     localStorage.removeItem('token');
//   }
//
//   getToken(): string | null {
//     return this.token;
//   }
//
//   isLoggedIn(): boolean {
//     return !!this.token;
//   }
// }
