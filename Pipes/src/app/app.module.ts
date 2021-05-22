import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
 

  ],
  providers: [{
    provide: LOCALE_ID ,useValue:'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
