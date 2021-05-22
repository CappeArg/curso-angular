import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  cadenaDeClases: string;
  arrayDeClases: string[];
  colorSeleccionado: string;
  mostrar:boolean;

  constructor() { 
    this.cadenaDeClases = 'semaforo rojo';
    this.arrayDeClases = ['semaforo'];
    this.arrayDeClases.push('rojo');
    this.arrayDeClases.push('redondo');
    this.colorSeleccionado='v';
    this.mostrar = true;
  }

  ngOnInit(): void {

    setInterval(()=>{
      if(this.colorSeleccionado==="r"){
        this.colorSeleccionado = "v";
      }
      else if(this.colorSeleccionado === "v"){
        this.colorSeleccionado = "a";
      }
      else if(this.colorSeleccionado === "a"){
        this.colorSeleccionado = "r"
      }

    },1000)
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;

  }

}
