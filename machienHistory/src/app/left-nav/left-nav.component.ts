import { Component } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {

  menuOpen = false;

  openNav() {
    this.menuOpen = true;
  }

  closeNav() {
    this.menuOpen = false;
  }
}
