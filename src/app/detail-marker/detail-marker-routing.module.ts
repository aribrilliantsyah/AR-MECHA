import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMarkerPage } from './detail-marker.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMarkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMarkerPageRoutingModule {}
