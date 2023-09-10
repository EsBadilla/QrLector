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
    {id:2,nombre:'Camilo',password:'Topito'},
    {id:3,nombre:'Alan',password:'JisoRika'},
    {id:4,nombre:'Franco',password:'Chikito20156'},
    {id:5,nombre:'Juan',password:'JuanShuster'},
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
