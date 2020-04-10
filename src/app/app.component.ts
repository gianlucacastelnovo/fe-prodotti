import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../app/_services/authentication.service';
import { User } from '../app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Elenco Alimenti';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

toggleNavbar(){

}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}

