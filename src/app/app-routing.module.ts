import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './views/layout/layout.module#LayoutModule'
  },
  {
    path: 'home/calendario',
    loadChildren: './views/calendario/calendario.module#CalendarioModule'
  },
  {
  	path: '**',
  	redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
