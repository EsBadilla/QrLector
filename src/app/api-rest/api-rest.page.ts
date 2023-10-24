import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.page.html',
  styleUrls: ['./api-rest.page.scss'],
})
export class ApiRestPage implements OnInit {

  data: any[] = [];
  cont : number = 1;

  constructor(private navCtrl: NavController  ,private apiservice: ApiService) { }

  ngOnInit() {
    this.next()
  }

  llenarData(pagina){this.apiservice.getData(pagina).subscribe((data) =>{
    this.data = data.results;
    
  })
}
  next(){
    this.llenarData(this.cont)
    this.cont++;
  }

  volver(){
    this.navCtrl.back();
  }
}
