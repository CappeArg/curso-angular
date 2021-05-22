import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { persona } from '../models/persona.model'

@Injectable()
   // { providedIn: 'root'  }    SINGLETON

export class PersonasService {

personas: persona[]; 
  constructor() {
    this.personas =[
      new persona('Pablo', 'Cappellacci', 31, true),
      new persona('Sofia', 'Gatti', 30, true),
      new persona('Mateo', 'Cappellacci', 16, true),
      new persona('Tercilio', 'Cappellacci', 92, false),

    ];
   }

   getAll(){
     return this.personas;
   }

   create(personaNueva:persona){

    this.personas.push(personaNueva);
   }

   activos(): Promise<persona[]>{
     const prom = new Promise<persona[]>((resolve,reject)=>{

     const arrTemporal: persona[] = [];
       for(let persona of this.personas){
         if(persona.activo){
           arrTemporal.push(persona);
         }
       }
       resolve(arrTemporal);
     });
       return prom;
   }

   activosV2():Promise<persona[]>{

    return new Promise((resolve, reject)=>{
    resolve (this.personas.filter(persona=>
        persona.activo));
    })

   }
}
