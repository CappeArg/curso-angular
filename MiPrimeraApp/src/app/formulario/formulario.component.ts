import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() tareaCreada: EventEmitter<Tarea>;
  nuevaTarea: Tarea;
  constructor() { 
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.tareaCreada.emit(this.nuevaTarea)
    this.nuevaTarea = new Tarea();
  }

}
