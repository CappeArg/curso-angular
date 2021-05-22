import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {

  empleadoId:number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.empleadoId=params.empleadoId;
    });
  }

}
