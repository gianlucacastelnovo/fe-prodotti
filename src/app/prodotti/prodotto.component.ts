import { Component, OnInit } from '@angular/core';
import { Hero } from './prodotto';

import { HEROES} from './mock_heroes';
import { ProdottoService } from '../services/prodotto/prodotto.service';
import { Prodotto } from '../models/prodotto';
import { ProdottoCarrello } from '../models/carrello';
import { ThemePalette } from '@angular/material';

import { ClickColorDirective } from '../prodotti/click-color.directive';


@Component({
  selector: 'app-heroes',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
  resetProdotti: boolean;
  prodottiData: any;
  heroes = HEROES;
  carrello : any;
  buttonColor: ThemePalette = 'primary';
  // apiService: ApiService;

  constructor(
    public prodottoService: ProdottoService
  ) {
    this.prodottiData = [];
    this.carrello = new ProdottoCarrello();
    this.carrello.id = 2;
  }

  ngOnInit() {
    this.resetProdotti = true;
    this.getAllProducts();

  }

  getAllProducts() {

    this.prodottoService.getList().subscribe(response => {
        console.log(response);
        // if ( this.resetProdotti )
        {
             this.prodottiData = response;
        }
      } );
    this.resetProdotti = false;

    }


  getProdottiInCarrello( carrello ) {
/*
    this.prodottoService.getProdottiInCarrello( carrello ).subscribe(response => {
      console.log(response);
      this.prodottiData = response;
    } )*/
  }


  onChange(element: any, numero: number){
    element.num = element.num + numero;
    // tslint:disable-next-line: whitespace
    if( element.num < 0 ) { element.num = 0 ; }
    console.log('Add button is clicked!');

    this.prodottoService.sincroProdotto(element).subscribe(response => {
      console.log(response);
     // this.prodottiData = response;
    } )
  }

  printCarrello(){
    console.log('Print button is clicked!');
    this.prodottiData.forEach(element => {
      if( element.num > 0 ) {
      console.log('PRODOTTO:' + element.name + ':' + element.num);
      }
    });
// Salvo carrelo
    this.prodottoService.sincroCarrello(this.prodottiData).subscribe(response => {
      console.log(response);
      // this.prodottiData = response;
    } )
  }

  onAdd(){
    this.prodottiData[0].num = 6;
    console.log('Add button is clicked!');
  }
  onRemove(){
    console.log('Remove button is clicked!');
  }
}
