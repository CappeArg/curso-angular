export class Producto {
    nombre: string;
    imgurl: string;
    precio: number;
    cantidad:number;

    constructor(pNombre:string, pImgurl:string, pPrecio:number){
        this.nombre = pNombre;
        this.imgurl = pImgurl;
        this.precio = pPrecio;
        this.cantidad = 0;

    }
}