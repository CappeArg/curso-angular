import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados=[];
   }
   insert(pEmpleado): void{
     this.arrEmpleados.push(pEmpleado)
     console.log(this.arrEmpleados);

   }
   getAll(): Promise<Empleado[]>{
     return new Promise((resolve,reject)=>{
       resolve(this.arrEmpleados);
     })

   }
}
