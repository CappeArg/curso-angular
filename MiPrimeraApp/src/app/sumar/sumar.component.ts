import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SUMARComponent implements OnInit {
@Input() numero1:number;

@Input() numero2:number;

resultado:number;
  constructor() {
    this.numero1 = 60;
    this.numero2 = 3;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }
  calcular(){
    this.resultado = this.numero1 + this.numero2
  }

}
