import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../services/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotto-list',
  templateUrl: './prodotto-list.component.html',
  styleUrls: ['./prodotto-list.component.css']
})
export class ProdottoListComponent implements OnInit {

  prodottiData: any;

  constructor(
    public service: ProdottoService
  ) {
    this.prodottiData = [];
  }
   ngOnInit() {
    this.getList();
  }

  getList() {

    this.service.getList().subscribe(response => {
      console.log(response);
      this.prodottiData = response;
    })
  }

}
