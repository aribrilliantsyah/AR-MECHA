import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMarkerPageRoutingModule } from './detail-marker-routing.module';

import { DetailMarkerPage } from './detail-marker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMarkerPageRoutingModule
  ],
  declarations: [DetailMarkerPage]
})
export class DetailMarkerPageModule {}
