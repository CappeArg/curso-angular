import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input () inicio:number;
  @Output() terminaCronometro:EventEmitter<string>= new EventEmitter();

  contador:number;

  constructor() { 
  this.contador = 10;
  this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
  }

  onClick(){
    let interval = setInterval(()=>{
    
      this.contador--;
  
    if(this.contador <  0){
  
      clearInterval(interval);
      this.contador = this.inicio;
      this.terminaCronometro.emit('finaliza el cronómetro con el numero ' + this.inicio)
    }
  },1000);
  }

}