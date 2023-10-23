import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private animacion: Animation = {} as Animation;
  dato:any;
  constructor(private router:Router,private route: ActivatedRoute, private AnimationCtrl: AnimationController, public authService:AuthenticationService) {
    this.route.paramMap.subscribe((params)=>{
      this.dato = params.get('data');
    })
  }
  ngOnInit() {
    this.animacion = this.AnimationCtrl.create()
    .addElement(document.querySelectorAll(".texto"))
    .duration(2000)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(-300px)', 'translateX(300px)')
    this.animacion.play();

  }
  salir(){
    this.authService.signOut()
    this.router.navigate(['']);
  }
}
