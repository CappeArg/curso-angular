import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage:number;
  numPages:number

  arrPersonajes:any[];
  constructor(private personajesService:PersonajesService){
    this.currentPage= 1;

  }
 ngOnInit() {
 this.personajesService.getAll()
 .then(response=>{
  this.arrPersonajes= response['results'];
  this.numPages = response['info']['pages'];

});
}
async changePage(siguiente){
  if (siguiente) {
    this.currentPage++;  
  }else{
    this.currentPage--
  }
  const response= await this.personajesService.getAll(this.currentPage);
  this.arrPersonajes=response['results']
}
}
