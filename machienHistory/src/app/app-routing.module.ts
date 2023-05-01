import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import {ProjectOneComponent} from "./project-one/project-one.component";
import {ProjectTwoComponent} from "./project-two/project-two.component";
import {AuthService} from "./auth.service";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'project/1', component: ProjectOneComponent },
      { path: 'project/2', component: ProjectTwoComponent },
    ],canActivate: [AuthService]  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
