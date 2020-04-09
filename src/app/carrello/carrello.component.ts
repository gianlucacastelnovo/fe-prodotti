import { Component, OnInit } from '@angular/core';
// import { CarrelloSpesa } from './carrelloSpesa';
// import { CARRELLO} from './mock_carrello';
import { CarrelloService } from '../services/carrello/carrelllo.service';
import { ProdottoService } from '../services/prodotto/prodotto.service';
import { Prodotto } from '../models/prodotto';
// import { Carrello } from '../models/carrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
 // carrellos = CARRELLO;Carrello
 prodottiIncarrello: any;

  constructor(
    // public service: ProdottoService
    public service: CarrelloService
  ) {
    this.prodottiIncarrello = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {

    this.service.getProdottiCarrelloAll().subscribe(response => {
      console.log(response);
      this.prodottiIncarrello = response;
    })
  }
  getProdottiInCarrello(id) {

    this.service.getProdottiInCarrello(id).subscribe(response => {
      console.log(response);
      this.prodottiIncarrello = response;
    });
  }

}
