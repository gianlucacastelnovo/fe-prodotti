import { Component, OnInit } from '@angular/core';
// import { CarrelloSpesa } from './carrelloSpesa';
// import { CARRELLO} from './mock_carrello';
import { CarrelloService } from '../services/carrello/carrelllo.service';
import { ProdottoService } from '../services/prodotto/prodotto.service';
import { Prodotto } from '../models/prodotto';
import { ProdottoCarrello } from '../models/carrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
 // carrellos = CARRELLO;Carrello
 list: any;

  constructor(
    public service: CarrelloService
  ) {
    this.list = [];
  }

  ngOnInit() {
    this.getPCInCarrello(1);
  }

   getPCInCarrello(id) {
    this.service.getPCInCarrello(id).subscribe(response => {
      console.log(response);
      this.list = response;
    })
  }


  onChange(element: any, numero: number){
    element.num = element.num + numero;
    if( element.num < 0 ) element.num = 0 ;
    this.service.sincroProdotto(element).subscribe(response => {
      console.log(response);
    } )
  }
/*
  getProdottiInCarrelloMap(id) {
    this.service.getProdottiInCarrello(id).subscribe(response => {
      console.log(response);
      this.list = response;
      let cont = 0;
      this.list.forEach(element => {
        this.list[cont].id = element.id;
        this.list[cont].num = element.num;
        this.list[cont].name = element.name;
        this.list[cont].path = element.path;

        cont++;
      });
    });
  }
*/
}
