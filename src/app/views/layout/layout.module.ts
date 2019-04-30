import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'workers',
        loadChildren: '../workers/workers.module#WorkersModule'
      },
      {
        path: 'incidents',
        loadChildren: '../incidents/incident.module#IncidentModule'
      },
      {
        path:'calendario',
        loadChildren: '../calendario/calendario.module#CalendarioModule'
      }
    ]
  }
];


@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  exports: [LayoutComponent]
})
export class LayoutModule {}
