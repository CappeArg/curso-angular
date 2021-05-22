import { Component, OnInit } from '@angular/core';
import { EscritoresService } from 'src/app/escritores.service';
import { Escritor } from '../../models/escritor.model'


@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private EscritoresService: EscritoresService) 
    {

   }

  async ngOnInit() {
    // const Escritores = this.EscritoresService.getAll();
    // this.arrEscritores = Escritores  }
    // this.EscritoresService.getAllPromise()
    // .then(escritores=>{
    //   this.arrEscritores = escritores;
    // })
    this.arrEscritores = await this.EscritoresService.getAllPromise();
  }

async  onChange($event){

  if($event.target.value==="todos"){

    this.arrEscritores= await this.EscritoresService.getAllPromise();

  }else{
    this.arrEscritores= await this.EscritoresService.getAllPais($event.target.value)
  }
  }

}
