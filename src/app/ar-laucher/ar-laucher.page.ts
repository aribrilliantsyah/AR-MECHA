

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar-laucher',
  templateUrl: './ar-laucher.page.html',
  styleUrls: ['./ar-laucher.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArLaucherPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  close(){
    this.modalCtrl.dismiss();
  }

}