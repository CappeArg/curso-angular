import { Component } from '@angular/core';
import { Producto } from './models/productos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor(){
this.arrComida = [
  new Producto('Cocido','https://www.ecestaticos.com/image/clipping/557/418/8d8fb03a61ffd1d8028b06059d4493eb/que-es-mejor-el-jamon-cocido-o-el-jamon-de-york.jpg',100),
  new Producto('Pororo','https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80', 50),
  new Producto('Papas Fritas','https://images.unsplash.com/photo-1544027657-36ca1f4a0a4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', 350),
  new Producto('Hamburguesa Especial', 'https://images.unsplash.com/photo-1598135696462-bed80b54e423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',400),
  new Producto('Hamburguesa Simple','https://images.unsplash.com/photo-1543583290-bea965b258ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 250)
];
this.arrBebida=[
  new Producto('Birra Rubia','https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',200),
  new Producto('Birra Roja','https://images.unsplash.com/photo-1552604620-d9d01744240c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',250)
];
this.productosSeleccionados=[];
  }
  onProductoSeleccionado($event){
    //this.productosSeleccionados.push($event);
    const productoEncontrado = this.productosSeleccionados.find(Producto=>Producto.nombre === $event.nombre);
    
    if (productoEncontrado){

      productoEncontrado.cantidad++;
    }else{
      $event.cantidad = 1
      this.productosSeleccionados.push($event);
    }
  }

  
}
