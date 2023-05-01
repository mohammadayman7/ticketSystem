import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: { username: string, password: string ,isAdmin:boolean}[] = [
    { username: 'user1', password: 'password1',isAdmin:false },
    { username: 'user2', password: 'password2' ,isAdmin:true},
    { username: 'user3', password: 'password3' ,isAdmin:true}
  ];
  username: string='';
  password: string='';
  errorMessage: string='';
  loginFailed: boolean = false;

  constructor(private router: Router, private authService: AuthService,private userService: UserService) { }

  login() {
    const { username, password } = this;
    const valid = this.credentials.some(cred => cred.username === username && cred.password === password);

    if (valid) {
      this.authService.login();
      this.userService.setUsername(username);
      this.router.navigateByUrl('/home');
      console.log('Login successful!');
    } else {
      this.loginFailed = true;
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }

}
