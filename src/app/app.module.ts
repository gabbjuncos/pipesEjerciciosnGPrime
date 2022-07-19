import { LOCALE_ID, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//primeNg
//import {PrimeNgModule} from './prime-ng/prime-ng.module'
import { SharedModule } from './shared/shared.module';

//import {ButtonModule} from 'primeng/button'
//import {CardModule} from 'primeng/card';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app
import localeEs from '@angular/common/locales/es-HN';
//importo el idioma frances
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
// se llama la funcion
registerLocaleData(localeEs);

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
