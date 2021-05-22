import { Component, OnInit } from '@angular/core';
import { persona } from '../models/persona.model';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers:[PersonasService]
})
export class ListaComponent implements OnInit {

  arrPersonas: persona[]
  constructor(private personasService:PersonasService) {

   }

  ngOnInit() {

    this.arrPersonas = this.personasService.getAll();

  }

}
