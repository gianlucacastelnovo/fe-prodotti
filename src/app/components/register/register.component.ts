import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Cliente', 'Venditore', 'Shopper', 'Admin'];
  selected: any;
  constructor() { }

  ngOnInit(): void {
    this.selected = this.Roles[0];
  }

}
