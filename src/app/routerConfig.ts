
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components1/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'log-in', component: LogInComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'carrello',        component: CarrelloComponent },
  { path: 'prodottoList',        component: ProdottoListComponent },

  { path: 'about',        component: AboutComponent },
  { path: 'privacy',        component: PrivacyComponent },
  { path: 'terms',        component: TermsComponent },

  { path: 'login', component: LoginComponent },

  /* { path: '',   redirectTo: '/home', pathMatch: 'full' },*/
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },


 /*  { path: '**', component: PageNotFoundComponent }*/
];
export default routes;



// otherwise redirect to home

