import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarioComponent} from './components/calendario/calendario.component'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './views/layout/layout.module#LayoutModule'
  },
  {path: 'calendar',component:CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
