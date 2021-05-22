import { Component } from '@angular/core';
import { Tarea } from "./models/tarea.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeros: number[];

  titulos:string[];

  campoTexto:string;

  persona:any;

  arrTareas: Tarea[];

  mainTexto:string;

  constructor(){
    this.titulos=['Jurasic Park', 'Star Wars', 'Jumanji'];
    this.numeros=[1,43,8,27];
    this.campoTexto = "valor inicial";
    this.persona={};
    this.arrTareas=[];
    this.mainTexto= "Texto desde el Padre";
  }

  ngOnInit(): void {

    let cont=0;
    setInterval(()=> {
      this.mainTexto=`Texto ${cont++}`;
    },2000) 
  }
  onAlertaPulsada($event){
    console.log($event);
  }
  onTerminaCronometro($event){
    console.log($event);
  }
  onClick(){
    this.campoTexto="Valor desde el botón";
  }
  onTareaCreada($event){
    this.arrTareas.push($event);
  }
}
