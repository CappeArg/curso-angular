import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaLibreriaComponent } from './components/mapa-libreria/mapa-libreria.component';
import { MapaNativoComponent } from './components/mapa-nativo/mapa-nativo.component';


const routes: Routes = [
  {path:'nativo', component:MapaNativoComponent},
  {path:'libreria', component:MapaLibreriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
