import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario:FormGroup;


  constructor() { 
    this.formulario= new FormGroup({
      nombre: new FormControl('',[
        Validators.required, Validators.minLength(4)
      ]),
      apellido: new FormControl('',[
        Validators.maxLength(10)
      ]),
      edad: new FormControl('',[
        this.edadValidator
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      pass: new FormControl(''),
      repitePass:new FormControl(''),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ])

    });
  }

  ngOnInit(): void {
    const emailControl=this.formulario.controls.email;
    emailControl.valueChanges.subscribe(value=>{
      console.log(value);
    });
  }

  onSubmit(){
    console.log(this.formulario.value)
  }

  edadValidator(formControl){

    const value = formControl.value;
    const max = 65;
    const min= 18;

    if (value>=18 && value<=65){
    return null;
      }  else{
        return {edadValidator: {max,min}};
      }
    }
    dniValidator(formControl){
      const value = formControl.value;

      if(/(^([0-9]{8,8})|^)$/.test(value)){
        return null;

      }else{
        return {dniValidator:'El dni no es válido'}
      }
      

  
    }
  
  }

  