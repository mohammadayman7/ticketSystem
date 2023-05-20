import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
  constructor(private router: Router) {
  }
  menuOpen = false;

  openNav() {
    this.menuOpen = true;
  }

  closeNav() {
    this.menuOpen = false;
  }

  move() {
    this.router.navigateByUrl('/home/project/1');

  }
}
