import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from './prodotto';

import { HEROES} from './mock_heroes';
import { ProdottoService } from '../services/prodotto/prodotto.service';
import { CarrelloService } from '../services/carrello/carrelllo.service';
import { Prodotto } from '../models/prodotto';
import { ProdottoCarrello } from '../models/carrello';
import { ThemePalette, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

import { ClickColorDirective } from '../prodotti/click-color.directive';


@Component({
  selector: 'app-heroes',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
  dataSource : MatTableDataSource<Prodotto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  prodottiData: any;
  carrello : any;
  buttonColor: ThemePalette = 'primary';


  constructor(
    public prodottoService: ProdottoService,
    public carrelloService: CarrelloService
  ) {
    this.prodottiData = [];
    this.carrello = new ProdottoCarrello();
    this.carrello.id = 2;
  }

  ngOnInit() {
    this.getAllProducts();
   // this.getAllProductsPaginator();

  }

  getAllProducts() {

    this.prodottoService.getList().subscribe(response => {
       // console.log(response);
        // if ( this.resetProdotti )

             this.prodottiData = response;
             this.dataSource = new MatTableDataSource<Prodotto>(response['results']);
             this.dataSource.paginator = this.paginator;

      } );

      this.carrelloService.getPCInCarrello(1);


    }

  onChange(element: any, numero: number){
    element.num = element.num + numero;
      if( element.num < 0 ) { element.num = 0 ; }

    this.prodottoService.sincroProdotto(element).subscribe(response => {   this.prodottiData = response;     } );

    this.carrelloService.getPCInCarrello(1);

    return false;
  }


}
