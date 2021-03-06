import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaNativoComponent } from './components/mapa-nativo/mapa-nativo.component';
import { MapaLibreriaComponent } from './components/mapa-libreria/mapa-libreria.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MapaNativoComponent,
    MapaLibreriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2tYnsOXiOEcoRibLQU7BAsKCHjqs2hq8'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
