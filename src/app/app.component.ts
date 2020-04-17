import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
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
  numCarrello: number;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

}

toggleNavbar(){
  this.currentUser = this.authenticationService.currentUserValue;
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}

