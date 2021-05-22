import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas:any[];

  constructor() { 
    this.personas=[
      {nombre: 'Pablo', apellido:'Cappellacci', edad:31},
      {nombre: 'Sofía', apellido:'Gatti', edad:30},
      {nombre: 'Wada', apellido:'La Pusy', edad:4},
      {nombre: 'Salvador', apellido:'Cappellacci', edad:-2},
      {nombre: 'Ruperta', apellido:'Cappellacci', edad:-4},
      {nombre: 'Eduardo', apellido:'Cappellacci', edad:66},
      {nombre: 'Cristina', apellido:'Spoto', edad:56},
      {nombre: 'Marcos', apellido:'Cappellacci', edad:33},
      {nombre: 'Julieta', apellido:'Cappellacci Spoto', edad:28},
      {nombre: 'Belén', apellido:'Cappellacci', edad:27},
      {nombre: 'Mateo', apellido:'Cappellacci', edad:16},
      {nombre: 'Valentin', apellido:'Cappellacci', edad:10}
    ]
  }

  ngOnInit(): void {
  }

  onPersona(){

    this.personas.push({
      nombre: 'Anonimo',
      apellido: 'Sanchez',
      edad: 89
    }

    )
  }

}
