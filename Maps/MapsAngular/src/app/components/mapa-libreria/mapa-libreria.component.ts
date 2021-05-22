import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-mapa-libreria',
  templateUrl: './mapa-libreria.component.html',
  styleUrls: ['./mapa-libreria.component.css']
})
export class MapaLibreriaComponent implements OnInit {
latitud: number;
longitud: number;

paises: any[]

  constructor(private PaisesService:PaisesService) { 
    this.latitud = 40;
    this.longitud = -3;
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((result)=>{
      this.latitud= result.coords.latitude;
      this.longitud= result.coords.longitude;
    })
    this.PaisesService.getPaisesEuropeos()
    .then(response=>{
      this.paises=response;
    })
    .catch(error=>{

      console.log(error);
    })
  }

}
