import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMarkerPageRoutingModule } from './list-marker-routing.module';

import { ListMarkerPage } from './list-marker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMarkerPageRoutingModule
  ],
  declarations: [ListMarkerPage]
})
export class ListMarkerPageModule {}
