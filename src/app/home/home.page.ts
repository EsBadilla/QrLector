import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dato:any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params)=>{
      this.dato = params.get('data');
    })
  }

}
