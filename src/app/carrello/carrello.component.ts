import { Component, OnInit } from '@angular/core';
import { CarrelloSpesa } from './carrelloSpesa';
import { CARRELLO} from './mock_carrello';
@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  constructor() { }
   carrellos = CARRELLO;
  ngOnInit() {
  }

}
