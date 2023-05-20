import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//   loginForm: FormGroup = new FormGroup({});
//   loading = false;
//   submitted = false;
//   returnUrl: string = '';
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private authenticationService: AuthenticationService,
//     private alertService: AlertService
//   ) {
//     // redirect to home if already logged in
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }
//
//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//
//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }
//
//   // convenience getter for easy access to form fields
//   get f() { return this.loginForm.controls; }
//
//   onSubmit() {
//     this.submitted = true;
//
//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//       return;
//     }
//
//     this.loading = true;
//     this.authenticationService.login(this.f['username'].value, this.f['password'].value)
//       .pipe(first())
//       .subscribe(
//         data => {
//           this.router.navigate([this.returnUrl]);
//         },
//         error => {
//           this.alertService.error(error);
//           this.loading = false;
//         });
//   }

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router, private authService: AuthService, private auth: AuthenticationService) {
  }

//   onSubmit() {
//     this.submitted = true;
//
//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//       return;
//     }
//
//     this.loading = true;
//     this.authenticationService.login(this.f['username'].value, this.f['password'].value)
//       .pipe(first())
//       .subscribe(
//         data => {
//           this.router.navigate([this.returnUrl]);
//         },
//         error => {
//           this.alertService.error(error);
//           this.loading = false;
//         });
//   }
  login() {
    const {username, password} = this;

    this.authService.login(username, password);
    console.log(this.password)
    console.log(password)


  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { UserService } from '../user.service';
//
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   credentials: { username: string, password: string ,isAdmin:boolean}[] = [
//     { username: 'user1', password: 'password1',isAdmin:false },
//     { username: 'user2', password: 'password2' ,isAdmin:true},
//     { username: 'user3', password: 'password3' ,isAdmin:true}
//   ];
//   username: string='';
//   password: string='';
//   errorMessage: string='';
//   loginFailed: boolean = false;
//
//   constructor(private router: Router, private authService: AuthService,private userService: UserService) { }
//
//   login() {
//     const { username, password } = this;
//     const valid = this.credentials.some(cred => cred.username === username && cred.password === password);
//
//
//     this.authService.login(this.username, this.password).then(success => {
//       if (success) {
//         this.router.navigateByUrl('/home');
//         console.log('Login successful!');
//       } else {
//         this.loginFailed = true;
//         this.errorMessage = 'Invalid username or password. Please try again.';
//       }
//     });
//   }
//
//
//
// }
