import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
mensaje:string;
  constructor() {
   this.mensaje = 'Este es el mensaje inicial';
   }

  ngOnInit(): void {
  }
  onclick($event){
    console.log('Se pulsó el botón');
    console.log($event);  
  }
  onChange($event){
    console.log($event.target.value);
  }

  onMouseEnter(){
    this.mensaje = 'Este es el segundo mensaje';
  }
  onMouseOut(){
    this.mensaje = 'El mouse salió y este es el segundo mensaje';
  }
  onChangeInput($event){

  //  console.log($event.target.value);
  }
  onInput($event){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }
  onFocus(){
  console.log("recibe el foco");
  }
  onBlur(){

    console.log("pierde el foco");
  }
}
