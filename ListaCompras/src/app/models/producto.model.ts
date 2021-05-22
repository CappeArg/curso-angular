export class Producto{

    nombre: string;
    cantidad: number;
    categoria: string;



constructor (pNombre:string='',pCantidad:number=0,pCategoria:string=''){

    this.nombre = pNombre;
    this.cantidad = pCantidad;
    this.categoria = pCategoria;

}
}