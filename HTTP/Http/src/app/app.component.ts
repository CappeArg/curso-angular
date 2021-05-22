import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrPosts: any[];
  formulario: FormGroup;
  constructor(private postsService:PostService){

    this.formulario=new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });


  }
  ngOnInit(): void {
    this.postsService.getAll()
    .then(posts=>this.arrPosts = posts)
    .catch(error=>console.log(error));

  }

async onClick(postId) {
  try {
    const post= await this.postsService.getById(postId);
    console.log(post);  
  } catch (error) {
    console.log(error);
  }
}

onClickPost(){
  this.postsService.create({
    title:'Este es mi titulo', 
    body:'Este es mi cuerpo', 
    userId:3555555
  }).then(response=>console.log(response))
  .catch(error=>console.log(error))
}

async onSubmit(){
  try {
    const response= await this.postsService.create(this.formulario.value)
   console.log(response);
  } catch (error) {
   console.log(error);
  }
}
onClickUpDate(){
  this.postsService.update({
    id:3,
    title:'Nuevo Título',
    body:'Nuevo Cuerpo',
    userId:4
  }).then(response=>console.log(response))
  .catch(error=>console.log(error));
}

async onClickDelete(){
try{
  const response = await this.postsService.delete(3 );
  console.log(response);}catch(error){
    console.log(error);
  }
}
}