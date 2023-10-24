import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  nom : string;
  asig : string;
  fec : Date = new Date();
  asis : boolean = true;

  constructor(private firestore: AngularFirestore, private alertCtrl: AlertController,private navCtrl: NavController, ) { }

  ngOnInit() {
    
  }


  addData() {
    const data = { Nombre: this.nom, Asignatura: this.asig, fecha: this.fec, asistencia: this.asis };
    this.firestore.collection('Asistencia').add(data)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id);
        this.navCtrl.back();
      })
      .catch((error) => {
      this.showAlert('Error de Registro', 'Datos incorrectos o campos vacios');
      });
}

async showAlert(title: string, message: string) {
  const alert = await this.alertCtrl.create({
    header: title,
    message: message,
    buttons: ['Entendido']
  });
  await alert.present();}

}
