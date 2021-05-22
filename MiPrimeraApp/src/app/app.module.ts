import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { SUMARComponent } from './sumar/sumar.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    SUMARComponent,
    CronometroComponent,
    CalculadoraComponent,
    AlertaComponent,
    FormularioComponent,
    ListaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
