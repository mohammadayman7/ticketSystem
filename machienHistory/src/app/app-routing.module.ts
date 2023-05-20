import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProjectOneComponent} from "./project-one/project-one.component";
import {ProjectTwoComponent} from "./project-two/project-two.component";
import {AuthService} from "./_services/auth.service";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {AuthGuard} from "./_services/auth.guard";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'project/1', component: ProjectOneComponent },
      { path: 'project/3', component: ProjectTwoComponent},
      { path: 'ticket/1', component: TicketListComponent },


    ]
    ,canActivate: [AuthGuard]  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
