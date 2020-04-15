import { Component, OnInit } from '@angular/core';
import {MENUITEMS} from './mockMenu';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  appitems: any;
  lng: any;
  lat: any;

  constructor() {
    this.appitems = MENUITEMS;
   }

  ngOnInit() {
  }
  move() {
    console.log('move') ;
  }

  getLocation(event){
    let offsetLeft = 0;
    let offsetTop = 0;

    let el = event.srcElement;

    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
    return {offsetTop , offsetLeft }
}

selectedItem(items: any) {
    console.log('Selezionato ' + items.label + '-->' + items.link);
}
}
