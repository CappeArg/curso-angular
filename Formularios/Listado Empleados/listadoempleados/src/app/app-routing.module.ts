import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/list'},
  {path: 'new', component:FormularioComponent},
  {path: 'list', component:ListaEmpleadosComponent},
  {path:'**', redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
