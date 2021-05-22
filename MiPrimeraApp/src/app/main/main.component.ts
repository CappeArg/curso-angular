import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() texto:string;

  constructor() {
    console.log("******Estoy en el constructor, lo uso para inicializar propiedades");
    console.log(`texto:  ${this.texto}`);
   }

   ngOnChanges(changes: SimpleChange): void {
    console.log("*****************estoy en el ngOnChanges");
    console.log(`texto:  ${this.texto}`);
    console.log(`Valor Anterior: ${changes['texto'].previousValue}. Valor Actual:${changes['texto'].currentValue}`)     
   }



  ngOnInit(): void {
    console.log("******estoy en el ngOnInit");
    console.log("Acciones que se quieren llevar a cabo cuando arranca el componente");
    console.log(`texto:  ${this.texto}`);

  }

  ngAfterViewInit(): void {
    console.log("******estoy en el ngAfterViewInit");
    console.log("Lo uso para lanzar acciones iniciales dentro de la plantilla");
    
  }



}
