import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/productos.model';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
@Input() titulo:string;
@Input() productos: Producto[];

@Output() productoSeleccionado: EventEmitter<Producto>;
  constructor() { 
    this.productoSeleccionado = new EventEmitter()
  }

  ngOnInit(): void {
  }
onClickProducto(pProducto){
  this.productoSeleccionado.emit(pProducto);
}
}
