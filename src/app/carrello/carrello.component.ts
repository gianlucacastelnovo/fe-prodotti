import { Component, OnInit } from '@angular/core';
import { CarrelloSpesa } from './carrelloSpesa';
import { CARRELLO} from './mock_carrello';
import { CarrelloService } from '../services/carrello.service ';
import { Carrello } from '../models/carrello';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {


  // carrellos = CARRELLO;Carrello

  constructor(
  // carrellos = CARRELLO;
    public carrelloService: CarrelloService
  ) {
    this.carrelloData = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }



  getAllProducts() {

    this.carrelloService.getList().subscribe(response => {
      console.log(response);
      this.carrelloData = response;
    })
  }
}
