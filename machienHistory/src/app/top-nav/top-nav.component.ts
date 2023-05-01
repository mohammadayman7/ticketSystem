import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  constructor(private userService: UserService) { }

  menuOpen = false;
  userMenuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.userMenuOpen = false;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.menuOpen = false;
  }
  getUsername() {
    return this.userService.getUsername();
  }
}



