import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  empleadoId:number;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.parent.params.subscribe(params=>{this.empleadoId=params.empleadoId})
  }

}
