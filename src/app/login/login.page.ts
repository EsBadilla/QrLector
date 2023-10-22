import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup
  email:any;
  password:any;
  constructor(private router:Router, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AuthenticationService) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0,9._%+\-]+@[a-z0,9.\-]+.[a-z]{2,}$")
      ]],
      password: ['',[
        Validators.required,
        Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
      ]],
    })
  }
  get errorControl(){
    return this.loginForm?.controls;
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
      const user = await this.authService.loginUser(this.email,this.password).catch((error) => {
        console.log(error);
        loading.dismiss()
      })
      if(user){
        loading.dismiss()
        this.router.navigate(['/home',this.email])
      }else{
        console.log('provide correct values');
        
      }
    }
}