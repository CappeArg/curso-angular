import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
@Input() mensaje:string;
@Input() subtitulo:string;

@Output() alertaPulsada: EventEmitter<string>;
  constructor() { 

    this.mensaje = "Mensaje de alerta por defecto";
    this.subtitulo= "Mensaje subtitulo por defecto";
    this.alertaPulsada= new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){

    this.alertaPulsada.emit("Se emitió la alerta");
  }

}
