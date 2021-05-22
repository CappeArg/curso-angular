import { Injectable } from '@angular/core';
import { ESCRITORES } from '../app/db/escritores.db'
import { Escritor } from '../app/models/escritor.model'
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[]{
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]>{

    return new Promise((resolve, reject)=>{
      resolve(ESCRITORES);
    });
  }
  getAllPais(pPais:string):Promise<Escritor[]>{
    return new Promise((resolve,reject)=>{
      const arrFiltrado= ESCRITORES.filter(Escritor=>{
        return Escritor.pais === pPais;
      });
      resolve(arrFiltrado);
    }
     )
  }

  getById(escritorId):Promise<Escritor> {
    return new Promise((resolve,reject)=>{
      const escritorFound = ESCRITORES.find(escritor=>{
        return escritor.id === escritorId;
      });
      resolve(escritorFound);
    })

  }
}
