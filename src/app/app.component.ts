import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { AuthenticationService } from '../app/_services/authentication.service';
import { User } from '../app/models/user';
import { CarrelloService } from '../app/services/carrello/carrelllo.service';
import { Subscription } from 'rxjs';
import { SideMenuComponent } from './side-menu/side-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Elenco Alimenti';
  currentUser: User;
  numCarrello: number;
  messages: any[] = [];
    subscription: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private carrelloService: CarrelloService
) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // subscribe to home component messages
    this.subscription = this.carrelloService.getMessage().subscribe((message: any) => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
}

getCount(){

  const co = localStorage.getItem('num');
  if( co == null ) {
    return 0;
  }
  // else {  console.log('--->cont:' + co ); }


  return co;
}

toggleNavbar(){

}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}

