import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.page.html',
  styleUrls: ['./otppage.page.scss'],
})
export class OtppagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
verifyOtp() {

}
}
