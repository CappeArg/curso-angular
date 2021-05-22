import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(pTarea: Tarea){
    pTarea.completa=!pTarea.completa;
  }
  onClickBorrar(indice){
    this.tareas.splice(indice,1);
  }

}
