import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service.';

@Component({
  selector: 'app-prodotto-list',
  templateUrl: './prodotto-list.component.html',
  styleUrls: ['./prodotto-list.component.css']
})
export class ProdottoListComponent implements OnInit {

  prodottiData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.prodottiData = [];
  }
   ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {

    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.prodottiData = response;
    })
  }

}
