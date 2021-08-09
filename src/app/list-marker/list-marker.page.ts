import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailMarkerPage } from '../detail-marker/detail-marker.page';

@Component({
  selector: 'app-list-marker',
  templateUrl: './list-marker.page.html',
  styleUrls: ['./list-marker.page.scss'],
})
export class ListMarkerPage implements OnInit {
  items: any = [];

  constructor(private modalCtrl: ModalController, private modalCtrl2: ModalController) {
    this.items = [
      {
        'title': '001-1',
        'marker': '../../assets/images/markers/001-1.png',
        'model': '../../assets/images/models/001-1.png' 
      },
      {
        'title': '002-1',
        'marker': '../../assets/images/markers/002-1.png',
        'model': '../../assets/images/models/002-1.png' 
      },
      {
        'title': '003-1',
        'marker': '../../assets/images/markers/003-1.png',
        'model': '../../assets/images/models/003-1.png' 
      },
      {
        'title': '004-1',
        'marker': '../../assets/images/markers/004-1.png',
        'model': '../../assets/images/models/004-1.png' 
      },
      {
        'title': '005-1',
        'marker': '../../assets/images/markers/005-1.png',
        'model': '../../assets/images/models/005-1.png' 
      }
    ]
  }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async openDetail(item: any){
    console.log(item.marker)
    const modal = await this.modalCtrl2.create({
      component: DetailMarkerPage,
      componentProps: { 
        url_marker: item.marker,
        url_model: item.model,
      }
    });
    return await modal.present();
  }

}
