import { Component, OnInit } from '@angular/core';
// import { CarrelloSpesa } from './carrelloSpesa';
// import { CARRELLO} from './mock_carrello';
// import { CarrelloService } from '../services/carrello.service';
import { ProdottoService } from '../services/prodotto.service';
import { Prodotto } from '../models/prodotto';
// import { Carrello } from '../models/carrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
 // carrellos = CARRELLO;Carrello
 carrelloData: any;

  constructor(
    public prodottoService: ProdottoService
  ) {
    this.carrelloData = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }



  getAllProducts() {

    this.prodottoService.getProdottiCarrelloAll().subscribe(response => {
      console.log(response);
      this.carrelloData = response;
    })
  }
}
