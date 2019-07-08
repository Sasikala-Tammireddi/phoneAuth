import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
firebase.initializeApp({
  apiKey: 'AIzaSyCWKjSRLXo8hOP0hJwNdqizizlsvxXkEzw',
  authDomain: 'phonedb-949ab.firebaseapp.com',
  databaseURL: 'https://phonedb-949ab.firebaseio.com',
  projectId: 'phonedb-949ab',
  storageBucket: '',
  messagingSenderId: '580091990557',
  appId: '1:580091990557:web:cd471336c73e4b48'
});
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen, FirebaseAuthentication,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
