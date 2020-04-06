
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
 { path: 'about',        component: AboutComponent },
  { path: 'privacy',        component: PrivacyComponent },
  { path: 'terms',        component: TermsComponent },
  { path: 'carrello',        component: CarrelloComponent },
 { path: 'prodottoList',        component: ProdottoListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
 /*  { path: '**', component: PageNotFoundComponent }*/
];
export default routes;
