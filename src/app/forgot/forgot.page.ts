import { Component, OnInit } from '@angular/core';
import { user } from '../app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  usuarios:user[]=[
    {id:1,nombre:'Esteban',password:'LotoRey'},
    {id:2,nombre:'Alan',password:'JisooRika'},
    {id:3,nombre:'Franco',password:'Chikito20156'},
    {id:4,nombre:'Juan',password:'JuanSchuster'},
    {id:5,nombre:'Profe',password:'12345'},
  ]
  user:any;
  constructor(private route:Router) {}
  RecoverUser(){
    for(const i of this.usuarios){
      if(i.nombre==this.user){
        this.route.navigate(['/login'])
      }
    }
  }
  

  ngOnInit() {
  }

}
