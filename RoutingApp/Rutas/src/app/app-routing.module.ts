import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleempleadoComponent } from './componentes/detalleempleado/detalleempleado.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { InfoComponent } from './componentes/info/info.component';
import { RandomGuard } from './random.guard';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'informacion'},
  {path:'informacion', component: InfoComponent, canActivate:[RandomGuard]},
  {path:'about', redirectTo:'sobre'},
  {path: 'sobre', component:AboutComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'empleados/:empleadoId', component: DetalleempleadoComponent, children:[
    {path:'proyectos', component: ProyectosComponent},
    {path:'experiencia', component: ExperienciaComponent},
    {path:'curriculum', component: CurriculumComponent}

  ]},
  {path:'**', redirectTo:'contacto'} //cuando no encuentra ruta lo dirige a la página indicada, puede ser un componente 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
