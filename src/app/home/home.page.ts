import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { ModalController } from '@ionic/angular';
import { ArLaucherPage } from '../ar-laucher/ar-laucher.page';
import { ListMarkerPage } from '../list-marker/list-marker.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: String = "../../assets/images/light-mode.png";
  slideOpts = {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  constructor(public modalController: ModalController, private router: Router) {
    
  }

  async scanMarker()  {
    console.log('UH TEST')
    const modal = await this.modalController.create({
      component: ArLaucherPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async openListMarker()  {
    console.log('UH TEST')
    const modal = await this.modalController.create({
      component: ListMarkerPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async navigateToAbout() {
    this.router.navigate(['/about'])
  }
}
