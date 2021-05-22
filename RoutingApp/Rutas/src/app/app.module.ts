import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './componentes/info/info.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleempleadoComponent } from './componentes/detalleempleado/detalleempleado.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    DetalleempleadoComponent,
    ProyectosComponent,
    CurriculumComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
