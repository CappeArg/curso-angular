import { Component } from '@angular/core';
import { persona } from './models/persona.model'
import { PersonasService } from '../app/services/personas.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonasService]
})
export class AppComponent {
  
  arrPersonas: persona[];
  constructor(private personasService: PersonasService){ }

  ngOnInit() {
    this.arrPersonas = this.personasService.getAll();
      }

  onClick(){
    this.personasService.create(new persona('nuevo', 'prueba', 45, true));
  }

  async onClickActivas(){
    //con promesas se resuelve de esta manera
    // this.personasService.activos()
    // .then(arrTemporalPersonas=>{console.log(arrTemporalPersonas)})
    // .catch(error=>console.log(error))

    //con asyc await de esta->
  try{
    this.arrPersonas = await this.personasService.activos();
  }catch(error){
    console.log(error);
  } 
  }
}
