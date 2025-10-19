import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserInformationService } from '../../services/user-information-service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  userInfo = inject(UserInformationService);
  userRole = this.userInfo.getUserRole()
}
