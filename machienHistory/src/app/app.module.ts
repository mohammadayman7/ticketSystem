import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import {HomeComponent} from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    LeftNavComponent,
    TopNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [UserService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
