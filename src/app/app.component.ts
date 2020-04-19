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
  [x: string]: any;
  title = 'Elenco Alimenti';
  currentUser: User;
  numCarrello: number;
  messages: any[] = [];
    subscription: Subscription;
    co: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private carrelloService: CarrelloService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.co = 0;
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
async getCount2() {
  const value =  await this.carrelloService.getCount();
  //console.log(`async result: ${value}`);
}
getCount1() {
this.resolveAfter2Seconds(20).then(value => {
  this.co =  localStorage.getItem('num');
  return this.co;
  console.log(`promise result: ${value}`);
});
}

 getCount(){
  try {
    this.co =  localStorage.getItem('num');//this.carrelloService.getCount();
    if(this.co == null)
    this.co=0;
}
catch(e) {
    this.co=99;



}
  return this.co ;
}

toggleNavbar(){

}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}

