import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import localeEs from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common'

import { AppComponent } from './app.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [{
    provide: LOCALE_ID ,useValue:'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
