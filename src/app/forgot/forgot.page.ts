import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgForm : FormGroup
  email:any;
  constructor(private router:Router, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AuthenticationService) {}
  ngOnInit() {
    this.forgForm = this.formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0,9._%+\-]+@[a-z0,9.\-]+.[a-z]{2,}$")
      ]],
    })
  }
  get errorControl(){
    return this.forgForm?.controls;
  }

  async reset(){
    this.authService.resetPassword(this.email)
    this.router.navigate(['/login'])
  }

}
