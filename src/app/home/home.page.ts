import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  verificationId: any;
  mobile: any;
  code = '';
  constructor(
    private navCtrl: NavController,
    private firebaseAuthentication: FirebaseAuthentication
  ) {}

  send() {
    this.firebaseAuthentication.verifyPhoneNumber(this.mobile, 60).
    then(
      credential => {
            alert('SMS sent successfully');
            console.log(credential);
            this.verificationId = credential.verificationId;
          },
          err => {
            console.error(err);
          }
    );
  }

  verify() {
    const signInCredential = firebase.auth.PhoneAuthProvider.credential(
      this.verificationId,
      this.code
    );
    firebase
      .auth()
      .signInWithCredential(signInCredential)
      .then(
        info => {
          console.log(info);
        },
        err => {
          console.error(err);
        }
      );
  }
}
