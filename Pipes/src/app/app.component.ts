import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //currencyPipe
  precio:number;

  //decimalPipe
  numero: number;

  //datePipe
  fechaActual:Date;

  //percentPipe
  numAleatorio:number;

  //JSONPipe
  estudiante:any;

  //Lower, Upper, Title
  texto:string;

  //SlicePipe

  arrAnimales:string[];
  min:number;
  max:number;
//AsynPipe
prom: Promise<string>;
promPost:Promise<any>;

  constructor(private PostsService:PostsService){
    this.precio= 198.87;
    this.numero=3.2444458774569874885548;
    this.fechaActual=new Date();
    this.numAleatorio=Math.random();
    this.estudiante={
      nombre: 'Pablo',
      apellido:'Cappellacci',
      notas: [10,9,8,7,9]
    }
    this.texto='En un lugar de la Mancha';
    this.arrAnimales=['perro','gato','pajaro','yaguareté']
    this.min=0;
    this.max=this.arrAnimales.length
    this.prom=new Promise((resolve,reject)=>setTimeout(()=>resolve('Se resuelve la promesa pasados 4 segundos'),4000))
    this.promPost= PostsService.getAll();
  }
  ngOnInit(): void {
    setInterval(()=>this.fechaActual=new Date(),1000)
  }
  
}
