import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HEROES} from './mock_heroes';
import { ProdottoService } from '../services/prodotto.service';
import { Prodotto } from '../models/prodotto';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  prodottiData: any;
  heroes = HEROES;
  // apiService: ApiService;

  constructor(
    public prodottoService: ProdottoService
  ) {
    this.prodottiData = [];
  }

  ngOnInit() {
    this.getAllProducts();
  }



  getAllProducts() {

    this.prodottoService.getList().subscribe(response => {
      console.log(response);
      this.prodottiData = response;
    })
  }

  onChange(element: any,numero: number){
    element.num = element.num + numero;
    // tslint:disable-next-line: whitespace
    if( element.num < 0 ) element.num = 0;
    console.log('Add button is clicked!');

    this.prodottoService.getList().subscribe(response => {
      console.log(response);
      this.prodottiData = response;
    })
  }
  onAdd(){
    this.prodottiData[0].num = 6;
    console.log('Add button is clicked!');
  }
  onRemove(){
    console.log('Remove button is clicked!');
  }
}
