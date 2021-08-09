import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ar-laucher',
    loadChildren: () => import('./ar-laucher/ar-laucher.module').then( m => m.ArLaucherPageModule)
  },
  {
    path: 'list-marker',
    loadChildren: () => import('./list-marker/list-marker.module').then( m => m.ListMarkerPageModule)
  },
  {
    path: 'detail-marker',
    loadChildren: () => import('./detail-marker/detail-marker.module').then( m => m.DetailMarkerPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
