import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nom : string;
  asig : string;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  addData() {
    const data = { Nombre: this.nom, Asignatura: this.asig, fecha: 'fec', asistencia: 'asis' };
    this.firestore.collection('Asistencia').add(data)
      .then((docRef) => {
        console.log('Documento agregado con ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar el documento: ', error);
      });
}
}
