import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-marker',
  templateUrl: './detail-marker.page.html',
  styleUrls: ['./detail-marker.page.scss'],
})
export class DetailMarkerPage implements OnInit {
  @Input() url_marker: any;
  @Input() url_model: any;

  constructor(private modalCtrl: ModalController) {
  }
  
  ngOnInit() {
    // console.log(`${this.url_marker} - ${this.url_model}`)
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
