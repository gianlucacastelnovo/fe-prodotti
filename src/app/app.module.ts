import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
// tslint:disable-next-line: no-unused-expression
import { FlexLayoutModule } from '@angular/flex-layout';
//  import { MatToolbarModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import routes from './routerConfig';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

import { CarrelloComponent } from './carrello/carrello.component';
import { HttpClientModule } from '@angular/common/http';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    PageNotFoundComponent,
    SideMenuComponent,
    CarrelloComponent,
    ProdottoListComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FlexLayoutModule,


      // Material
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatSnackBarModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatIconModule,
      HttpClientModule,
  ],
  exports: [
    BsDropdownModule, TooltipModule, ModalModule,
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    // ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule {};

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
