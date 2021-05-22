import { Component } from '@angular/core';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paises:any[];

constructor(
  private paisesServices: PaisesService
){}

async ngOnInit() {

  this.paises = await this.paisesServices.getPaises();
  console.log(this.paises);


  
}
}
