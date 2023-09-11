import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../app.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarios:user[]=[
    {id:1,nombre:'Esteban',password:'LotoRey'},
    {id:2,nombre:'Alan',password:'JisooRika'},
    {id:3,nombre:'Franco',password:'Chikito20156'},
    {id:4,nombre:'Juan',password:'JuanSchuster'},
    {id:5,nombre:'Profe',password:'12345'},
  ]
  user:any;
  password:any;
  constructor(private router:Router) {}
  validarUser(){
  for(const i of this.usuarios){
    if(i.nombre==this.user){
      if(i.password==this.password){
        this.router.navigate(['/home',this.user])
        }
      }
    }
  }
  ngOnInit() {
  }

}
